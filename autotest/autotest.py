from script import test_website
from selenium import webdriver

url = "http://localhost:3000"

try:
    driver = webdriver.Firefox()
    test_website(driver, url)
except:
    print("Firefox is not working properly.")

try:
    driver = webdriver.Edge()
    test_website(driver, url)
except:
    print("Edge is not working properly.")


try:
    driver = webdriver.Chrome()
    test_website(driver, url)
except:
    print("Chrome is not working properly.")


try:
    driver = webdriver.Opera()
    test_website(driver, url)
except:
     print("Opera is not working properly.")



