import sys

from PySide6.QtCore import Qt
from PySide6.QtWidgets import (
    QApplication,
    QCheckBox,
    QComboBox,
    QDial,
    QDoubleSpinBox,
    QLabel,
    QLineEdit,
    QListWidget,
    QMainWindow,
    QSlider,
    QSpinBox,
)

from main_form import Ui_MainWindow


class MainWindow(QMainWindow, Ui_MainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("My App")

        # checkbox = QCheckBox()
        # checkbox.setText("This is checkbox")
        # checkbox.setCheckState(Qt.CheckState.Checked)
        # checkbox.stateChanged.connect(self.show_state)

        # self.setCentralWidget(checkbox)
        
        combobox = QComboBox()
        combobox.addItems(["one", "two", "three"])
        combobox.setEditable(False)
        combobox.setInsertPolicy(QComboBox.InsertPolicy.NoInsert)
        font = combobox.font()
        font.setPointSize(10)
        combobox.setFont(font)
        # combobox.setStyleSheet("""
        #                        QComboBox::drop-down {
        #                            width: 30px;
        #                            height: 30px;
        #                        }
        #                        QComboBox::down-arrow {
        #                            width: 20px;
        #                            height: 20px
        #                        }
        #                        """)
        
        combobox.currentIndexChanged.connect(self.index_changed)
        combobox.currentTextChanged.connect(self.text_changed)
        
        self.setCentralWidget(combobox)
        
    def index_changed(self, index):
        print(index)
    
    def text_changed(self, text):
        print(text)

        

    def show_state(self, state):
        print(state == Qt.CheckState.Checked.value)
        print(state)


app = QApplication(sys.argv)

window = MainWindow()
window.show()

app.exec()
