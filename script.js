import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import customParseFormat from "https://unpkg.com/dayjs@1.11.10/esm/plugin/customParseFormat/index.js";

dayjs.extend(customParseFormat);
const form = document.querySelector("form");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");


const dayInputGroup = day.closest(".input-group");
const monthInputGroup = month.closest(".input-group");
const yearInputGroup = year.closest(".input-group");

const dayError = document.querySelector("#day-msg");
const monthError = document.querySelector("#month-msg");
const yearError = document.querySelector("#year-msg");

const yearsResult = document.querySelector("#years-result");
const monthsResult = document.querySelector("#months-result");
const daysResult = document.querySelector("#days-result");

let inputDay;
let inputMonth;
let inputYear;
let currentYear = dayjs().year();
form.addEventListener("submit", (e) => {
  let isFormValid = true;

  e.preventDefault(); // this so that form does not submit and we can calculate

  if (day.value.trim() === "") {
    isFormValid = false;
    dayInputGroup.classList.add("error");
  } else if (day.value < 1 || day.value > 31) {
    isFormValid = false;
    dayInputGroup.classList.add("error");
    dayError.textContent = "Must be a valid date";
  } else {
    inputDay = day.value;
    dayInputGroup.classList.remove("error");
  }

  if (month.value.trim() === "") {
    isFormValid = false;
    monthInputGroup.classList.add("error");
  } else if (month.value < 1 || month.value > 12) {
    isFormValid = false;
    monthInputGroup.classList.add("error");
    monthError.textContent = "Must be a valid month";
  } else {
    inputMonth = month.value;
    monthInputGroup.classList.remove("error");
  }

  if (year.value.trim() === "") {
    isFormValid = false;
    yearInputGroup.classList.add("error");
  } else if (year.value > currentYear) {
    isFormValid = false;
    yearInputGroup.classList.add("error");
    yearError.textContent = "Must be in the past";
  } else {
    inputYear = year.value;
    yearInputGroup.classList.remove("error");
  }


  if (isFormValid) {
    const d = dayjs(
      `${inputYear}-${inputMonth.padStart(2, "0")}-${inputDay.padStart(2, "0")}`,
      "YYYY-MM-DD",
      true,
    );

    if (d.isValid()) {
      const today = dayjs();
      let years = today.diff(d, "year");
      let afterYears = d.add(years, "year");
      let months = today.diff(afterYears, "month");
      let afterMonths = afterYears.add(months, "month");
      let days = today.diff(afterMonths, "day");
      yearsResult.textContent = years;
      monthsResult.textContent = months;
      daysResult.textContent = days;
      form.reset();
    }else{
       dayInputGroup.classList.add("error");
      dayError.textContent = "Must be a valid date";
    }
  }
});
