from utils import test_website
from selenium import webdriver

url = "http://localhost:3000"

try:
    driver = webdriver.Edge()
    driver.get(url)
    test_website(driver)
    driver.close() 
except:
    print("Edge is not working properly.")


try:
    driver = webdriver.Chrome()
    driver.get(url)
    test_website(driver)
    driver.close() 
except:
    print("Chrome is not working properly.")

try:
    driver = webdriver.Firefox()
    driver.get(url)
    test_website(driver)
    driver.close() 
except:
    print("Firefox is not working properly.")


try:
    driver = webdriver.Opera()
    driver.get(url)
    test_website(driver)
    driver.close()
except:
     print("Opera is not working properly.")



