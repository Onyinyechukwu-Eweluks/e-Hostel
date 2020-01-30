import { SCHOOL_LIST, CATEGORIES, SCHOOL } from "./constant";

export function loadCategoriesSuccess(payload) {
  return { type: CATEGORIES, payload };
}
export function loadListOfschoolsSuccess(payload) {
  return {
    type: SCHOOL_LIST,
    payload
  };
}
<<<<<<< HEAD
export function loadSchoolSuccess(payload) {
  return {
    type: SCHOOL,
    payload
  };
=======
export function loadSchoolSuccess(payload){
  return{
      type: SCHOOL,
      payload
  }
>>>>>>> f19582adae00a8b7bdcff36014121a032b430d6f
}



export function LoadSchool(id) {
  return function(dispatch) {
    fetch(`/school/${id}`)
      .then(res => res.json())
      .then(json => {
        dispatch(loadSchoolSuccess(json));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function LoadCategories() {
  return function(dispatch) {
    fetch("/categories")
      .then(res => res.json())
      .then(json => {
        dispatch(loadCategoriesSuccess(json));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function LoadListOfSchools(id) {
  return function(dispatch) {
    fetch(`/schools/${id}`)
      .then(res => res.json())
      .then(json => {
        dispatch(loadListOfschoolsSuccess(json));
      });
  };
}


