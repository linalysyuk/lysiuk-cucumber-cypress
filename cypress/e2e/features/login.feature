Feature: Product autopract
    Background:
        Given Open autopract.com
        When Close modal letter

    Scenario: Open shop page main page dress
        When Open section "no sidebar" in shop header
        Then Page have banner "Fashion"
       
    @focus
    Scenario Outline: Open main page dress
        And Open section "no sidebar" in shop header
        And Page have banner "Fashion"
     