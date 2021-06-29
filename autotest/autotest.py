from utils import test_website
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("http://localhost:3000")

test_website(driver)

driver.close() 

driver = webdriver.Firefox()
driver.get("http://localhost:3000")

test_website(driver)

driver.close() 



