import { createSlice } from "@reduxjs/toolkit";

export const dataStoreSlice = createSlice({
    name: 'dataStore', // Use a string here to identify your slice
    initialState: {
        personalInfo: {
            firstName: "",
            lastName: "",
            Email: "",
            Mobile: "",
            Address: "",
            City: "",
            state: "",
            postalCode: "",
            object: "",
        },
        workExperience: {
            jobTitle: "",
            organisationName: "",
            selectYear: "",
            endYear: "",
        },
        education: [{
            type: "",
            university: "",
            degree: "",
            startYear: "",
            endYear: "",
        }],
        keyskill: [{
            skillName: ""
        }]
        //selectedTemplate:"",
    },
    reducers: {
        updatePersonalInfo: (state, action) => {
            state.personalInfo[action.payload.key] = action.payload.value;
        },
        updateWorkExperienceInfo: (state, action) => {
            state.workExperience[action.payload.key] = action.payload.value;
        },
        updateEducation: (state, action) => {
            state.education[action.payload.key] = action.payload.value;
        },
        updateSkill: (state, action) => {
            state.keyskill[action.payload.key] = action.payload.value;
        }
    }
});
export const { updatePersonalInfo, updateWorkExperienceInfo, updateEducation,updateSkill} = dataStoreSlice.actions
export default dataStoreSlice.reducer;