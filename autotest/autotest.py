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
element_link = [link.get_attribute('href') for link in element]

scroll_page_down(driver)

for e in element_link:
    driver.get(e)
    sleep(1)

    scroll_page_down(driver)

    inner_ele = driver.find_elements_by_class_name("sc-ciSkZP.dcdDki")
    inner_links = [link.get_attribute('href') for link in inner_ele]
    for link in inner_links:
        driver.get(link)
        sleep(1)
        scroll_page_down(driver)
        driver.back()
    
driver.close() 

