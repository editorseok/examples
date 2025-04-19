import sys
import json
import assets.res_rc

from PySide6.QtCore import Qt
from PySide6 import QtWidgets, QtGui, QtCore

from mainwindow_ui import Ui_MainWindow

tick = QtGui.QImage(":/icons/tick.png")


class TodoModel(QtCore.QAbstractListModel):
    def __init__(self, todos=None):
        super().__init__()
        self.todos = todos or []

    def data(self, index, role):
        if role == Qt.ItemDataRole.DisplayRole:
            status, text = self.todos[index.row()]
            return text
        if role == Qt.ItemDataRole.DecorationRole:
            status, _ = self.todos[index.row()]
            if status:
                return QtGui.QColor("green")

    def rowCount(self, index):
        return len(self.todos)


class MainWindow(QtWidgets.QMainWindow, Ui_MainWindow):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.model = TodoModel([(False, "My First Todo")])
        self.load()

        self.todoView.setModel(self.model)

        self.addButton.pressed.connect(self.add)
        self.deleteButton.pressed.connect(self.delete)
        self.completeButton.pressed.connect(self.complete)

    def add(self):
        text = self.todoEdit.text()
        if text:
            self.model.todos.append((False, text))
            self.model.layoutChanged.emit()
            self.todoEdit.setText("")
            self.save()

    def delete(self):
        indexes = self.todoView.selectedIndexes()

        if indexes:
            index = indexes[0]

            del self.model.todos[index.row()]
            self.model.layoutChanged.emit()
            self.todoView.clearSelection()
            self.save()

    def complete(self):
        indexes = self.todoView.selectedIndexes()
        if indexes:
            index = indexes[0]
            row = index.row()

            status, text = self.model.todos[row]
            self.model.todos[row] = (True, text)
            self.model.dataChanged.emit(index, index)
            self.todoView.clearSelection()
            self.save()

    def load(self):
        try:
            with open("data.db", "r") as f:
                self.model.todos = json.load(f)
        except Exception:
            pass

    def save(self):
        with open("data.db", "w") as f:
            json.dump(self.model.todos, f)


app = QtWidgets.QApplication(sys.argv)

window = MainWindow()
window.show()

app.exec()
