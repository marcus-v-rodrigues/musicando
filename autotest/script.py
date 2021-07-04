from time import sleep

IPAD   = {'width':768, 'height':1024}
IPHONE = {'width':375, 'height':812}

SCROLL_TIME = 0.00005
WAIT = 1

def test_reponsivity(driver, sizes):
    for size in sizes:
            driver.set_window_size(size['width'], size['height'])
            sleep(WAIT*3)
            scroll_page_down(driver)
            scroll_page_down(driver, 0)


def scroll_page_down(driver, len=1):
    height = driver.execute_script("return document.body.scrollHeight")
    
    for x in range(0, int(len*height), 2):
        driver.execute_script(f"window.scrollTo(0,{x});")
        sleep(SCROLL_TIME)


def test_website(driver, url):
    driver.get(url)

    # sizes = [IPHONE, IPAD, driver.get_window_size()]
    
    # element = driver.find_elements_by_class_name("sc-dIsUp.jXSUvX")
    # element_link = [link.get_attribute('href') for link in element]

    # test_reponsivity(driver, sizes)
        

    # for e in element_link:
    #     driver.get(e)
        
    #     test_reponsivity(driver, sizes)

    #     inner_ele = driver.find_elements_by_class_name("sc-ciSkZP.dcdDki")
    #     inner_links = [link.get_attribute('href') for link in inner_ele]
    #     for link in inner_links:
    #         driver.get(link)
    #         sleep(WAIT)
    #         scroll_page_down(driver)
    #         driver.back()
        

    driver.get(url+"/cart")
    scroll_page_down(driver, 0.1)
    sleep(WAIT*3)

    driver.get(url)
    product = driver.find_elements_by_class_name("sc-efHYUO.cQWItu")
    product[0].click()

    scroll_page_down(driver, 0.1)
    sleep(WAIT*3)  

    add_chart_btn = driver.find_elements_by_class_name("sc-bdnxRM.exJeZX")
    add_chart_btn[0].click()
    driver.get(url+"/cart")
    scroll_page_down(driver, 0.1)
    sleep(WAIT*3)
        
    driver.close()