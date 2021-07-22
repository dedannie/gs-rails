require "application_system_test_case"

class PagesTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit root_path

    fill_in "age_of_death_a", with: 10
    fill_in "year_of_death_a", with: 12
    fill_in "age_of_death_b", with: 13
    fill_in "year_of_death_b", with: 17

    click_on "Submit"
  
    assert_selector "div#answer1", text: "Person A born on Year = 12 - 10 = 2, number of people killed on year 2 is 2."
  end
end
