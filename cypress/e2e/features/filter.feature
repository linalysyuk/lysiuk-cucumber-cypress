
    Feature: Filter section
    Background:
        Given Open autopract.com
        When Close modal letter

    Scenario Outline: Open products shoes
        When Open section "left sidebar" in shop header
        Then Filter section name "category"
        When Open section "shoes" in filter category
        Then Page shoes is open


      