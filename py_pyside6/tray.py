import sys

from PySide6.QtCore import Qt
from PySide6.QtWidgets import QApplication, QMainWindow, QWidget, QSystemTrayIcon, QMenu
from PySide6.QtGui import QAction, QIcon, QKeySequence

from assets import res_rc

app = QApplication(sys.argv)
app.setQuitOnLastWindowClosed(False)

icon = QIcon(":/icons/monkey.png")

tray = QSystemTrayIcon()
tray.setIcon(icon)
tray.setVisible(True)


menu = QMenu()

action = QAction("A menu item")

menu.addAction(action)

quit = QAction("Quit")
quit.triggered.connect(app.quit)

menu.addAction(quit)

tray.setContextMenu(menu)

app.exec()
