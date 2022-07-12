import selenium.webdriver as webdriver
from selenium.webdriver.common.by import By

class WebDriverManagerFactory:
    def getWebdriverForBrowser(browserName):
        if browserName=='firefox':
            return webdriver.Firefox()
        elif browserName=='chrome':
            return webdriver.Chrome()
        elif browserName=='edge':
            return webdriver.Edge()
        else:
            return 'No match'

class Home_Page_Object:
    def __init__(self, driver):
        self.driver = driver
    def load_home_page(self):
        self.driver.get("https://www.packtpub.com/")
        return self
    def load_page(self,url):
        self.driver.get(url)
        return self
    def search_for_title(self, search_text):
        self.driver.find_element(By.ID, 'search').send_keys(search_text)
        search_button=self.driver.find_element(By.XPATH, '//button[@class="action search"]')
        search_button.click()

    def tear_down(self):
        self.driver.close()

class Test_Script:
    def test_1(self):
        driver = WebDriverManagerFactory.getWebdriverForBrowser("chrome")
        if driver == 'No match':
            raise Exception("No matching browsers found")
        pageObject = Home_Page_Object(driver)
        pageObject.load_home_page()
        pageObject.search_for_title('quality')
        pageObject.tear_down()

def main():
    test_executor = Test_Script()
    test_executor.test_1()

if __name__ == "__main__":
    main()
        