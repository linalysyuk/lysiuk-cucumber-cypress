Feature: Displayed page section
    Background:
        Given Open product
        When Close modal letter
    Scenario Outline: Open shop page
        And Open section "<sectioName>" in shop header
        Then Section is open
    Examples:
    | sectioName   |
    | left sidebar |