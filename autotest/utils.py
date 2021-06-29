from time import sleep
from selenium import webdriver

SCROLL_TIME = 0.01
    
def scroll_page_down(driver):
    height = driver.execute_script("return document.body.scrollHeight")
    
    for x in range(0, height, 5):
        driver.execute_script(f"window.scrollTo(0,{x});")
        sleep(SCROLL_TIME)

def resize_window(driver):
    window_size = driver.get_window_size()
    height = window_size['height']
    width =  window_size['width']
    for n in range(1, 7):
        driver.set_window_size(width-100*n, height-25*n)
        sleep(3)
    scroll_page_down(driver)
    driver.set_window_size(width, height)


def test_website(driver):
    element = driver.find_elements_by_class_name("sc-dIsUp.jXSUvX")
    element_link = [link.get_attribute('href') for link in element]

    resize_window(driver)
    scroll_page_down(driver)

    for e in element_link:
        driver.get(e)
        sleep(1)

        resize_window(driver)
        scroll_page_down(driver)

        inner_ele = driver.find_elements_by_class_name("sc-ciSkZP.dcdDki")
        inner_links = [link.get_attribute('href') for link in inner_ele]
        for link in inner_links:
            driver.get(link)
            sleep(1)
            scroll_page_down(driver)
            driver.back()