const getTreatmentsFromApi = async (doctorId, date, itemsNumber) =>{
    return fetch(`//localhost:4000/doctors/${doctorId}/treatments?${date ? `date=${date}`: ''}${itemsNumber ? `&itemsNumber=${itemsNumber}`: ''}`)
    .then ((response) =>response.json())
    .then((data) => {
        return data;
      });
  };

  const getTreatmentDetailFromApi = async (doctorId, treatmentId) =>{
    return fetch(`//localhost:4000/doctors/${doctorId}/treatments/${treatmentId}`)
    .then ((response) =>response.json())
    .then((data) => {
        return data;
      });
  };

const functions = {
    getTreatmentDetailFromApi,
    getTreatmentsFromApi
  };

  export default functions;