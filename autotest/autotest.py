from selenium import webdriver
from time import sleep

SCROLL_TIME = 0.01
    
def scroll_page_down(driver):
    height = driver.execute_script("return document.body.scrollHeight")
    
    for x in range(0, height, 5):
        driver.execute_script(f"window.scrollTo(0,{x});")
        sleep(SCROLL_TIME)



driver = webdriver.Firefox()
driver.get("http://localhost:3000")

element = driver.find_elements_by_class_name("sc-dIsUp.jXSUvX")

scroll_page_down(driver)

for e in element:
    e.click()
    sleep(1)

    scroll_page_down(driver)

    # inner_ele = driver.find_elements_by_class_name("sc-ciSkZP.dcdDki")
    # for ie in inner_ele:
    #     ie.click()
    #     scroll_page_down(driver)
    #     driver.back()
    
driver.close() 

