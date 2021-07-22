require "application_system_test_case"

class PagesTest < ApplicationSystemTestCase
  test "visiting the root" do
    visit root_path

    fill_in "age_of_death_a", with: 10
    fill_in "year_of_death_a", with: 12
    fill_in "age_of_death_b", with: 13
    fill_in "year_of_death_b", with: 17

    click_on "Submit"
  
    assert_selector "div#answer1", text: "Person A born on Year = 12 - 10 = 2, number of people killed on year 2 is 2."
    assert_selector "div#answer2", text: "Person B born on Year = 17 - 13 = 4, number of people killed on year 4 is 7."
    assert_selector "div#answer3", text: "So the average is (7 + 2)/2 = 4.5"
  end
end
