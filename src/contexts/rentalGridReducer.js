
const getRecords = () => {
  let records = window.localStorage.getItem("rental-record");
  try {
    records = JSON.parse(records);
  } catch(e) {
    records = [];
  }
  return records;
}

const setRecord = (row) => {
  let records = getRecords();
  if(!records) { records = []}
  records.push(row);
  window.localStorage.setItem("rental-record", JSON.stringify(records));
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "selection_row":
      return {
        ...state,
        selectedRow: action.row
      }
    case "set_record": {
      setRecord(action.row);
      return {
        ...state,
        records: getRecords()
      }
    }    
    default:
      return state
  }
}

export const initialState = {
  selectedRow: null,
  records: getRecords() || []
}