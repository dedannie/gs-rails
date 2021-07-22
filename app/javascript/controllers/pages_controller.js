import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "age_of_death_a", "year_of_death_a", "age_of_death_b", "year_of_death_b",
                    "answer1", "answer2", "answer3" ]

  // Run everytime Submit button is clicked
  clicked() {
    const el_age_A = this.age_of_death_aTarget
    const el_year_A = this.year_of_death_aTarget
    const el_age_B = this.age_of_death_bTarget
    const el_year_B = this.year_of_death_bTarget

    const el_answer1 = this.answer1Target
    const el_answer2 = this.answer2Target
    const el_answer3 = this.answer3Target

    const age_A = el_age_A.value
    const year_A = el_year_A.value
    const age_B = el_age_B.value
    const year_B = el_year_B.value

    // Process for div#answer1
    this.people("A", age_A, year_A)
    let killed_by_A = this.killed    
    let answer_for_1 = this.answer
    el_answer1.innerHTML = answer_for_1

    // Process for div#answer2
    this.people("B", age_B, year_B)
    let killed_by_B = this.killed   
    let answer_for_2 = this.answer
    el_answer2.innerHTML = answer_for_2
    
    // Process for div#answer3
    let persons = [killed_by_A, killed_by_B]
    this.average(persons)
    let answer_for_3 = this.answer
    el_answer3.innerHTML = answer_for_3
  }

  // Function for creating text for div#answer1 and div#answer2 by throwing letter, age and year value
  people(letter, age, year) {
    if (age < 0) { age = -1 }
    if (year < 0) { year = -1 }
    this.age = age,
    this.year = year,
    this.killed = this.fibonacci(age, year),
    this.substration = this.year - this.age,
    this.answer = "Person " + letter + " born on Year = " + this.year + " - "+ this.age + " = " + this.substration + 
    ", number of people killed on year " + this.substration + " is " + this.killed + "."
  }

  // Creating Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1 and sum them
  fibonacci(age, year) {
    var numMax = year - age, x
    if (numMax > 0) {
      for(var sum = 1, i = 0,j = 1,k = 1; k < numMax; i = j, j = x, k++ ){
        x = i + j
        sum += x
      }
    }
    return sum || 0
  }

  // Calculate average from arrays value and create text for div#answer3
  average(numbers) {
    var total = 0
    for(var i = 0; i < numbers.length; i++) {
      total += numbers[i]
    }
    this.length = numbers.length,
    this.average = total / this.length,
    this.number_list = this.list_of_numbers(numbers),
    this.answer = 'So the average is (' + this.number_list + ')/' + this.length + ' = ' + this.average
  }

  // Create list number backward
  list_of_numbers(numbers) {
    for(var list_number = "", addition = "", i = numbers.length - 1; i >= 0 ; i-- ){
      addition = i > 0 ? " + " : ""
      list_number += numbers[i] + addition
    }
    return list_number
  }
}
