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

    sizes = [IPHONE, IPAD, driver.get_window_size()]
    
    element = driver.find_elements_by_class_name("sc-ksluID.bocajo")

    test_reponsivity(driver, sizes)

    for e in element:
        e.click()
        
        test_reponsivity(driver, sizes)

        inner_ele = driver.find_elements_by_class_name("sc-efHYUO.cQWItu")
        for link in inner_ele:
            link.click()
            sleep(WAIT)
            test_reponsivity(driver, sizes)
            driver.back()
            break
        
        driver.back()
        break


    driver.get(url+"/cart")
    scroll_page_down(driver, 0.1)
    sleep(WAIT*3)

    driver.get(url)
    product = driver.find_elements_by_class_name("sc-efHYUO.cQWItu")
    print(product)
    product[0].click()

    scroll_page_down(driver, 0.1)
    add_chart_btn = driver.find_elements_by_tag_name("button")
    add_chart_btn[0].click()
    sleep(WAIT*3)  
    driver.get(url+"/cart")
    scroll_page_down(driver, 0.1)
    sleep(WAIT*3)
        
    driver.close()