import uniqid from 'uniqid';

const initialState = {
  generalInfo: {
    name: '',
    email: '',
    telephone: '',
    github: '',
    linkedin: '',
  },
  education: {
    schoolName: '',
    major: '',
    educationStart: '',
    educationEnd: '',
  },
  educationData: [],
  experience: {
    companyName: '',
    position: '',
    from: '',
    to: '',
    expDescr: '',
  },
  experienceData: [],
  project: {
    projectName: '',
    institution: '',
    projectStart: '',
    projectEnd: '',
    projectDescr: '',
  },
  projectsData: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'field':
      return { ...state, [action.field]: action.payload };
    case 'name':
    case 'email':
    case 'telephone':
    case 'linkedin':
    case 'github':
      return {
        ...state,
        generalInfo: {
          ...state.generalInfo,
          ...action.payload,
        },
      };
    case 'schoolName':
    case 'major':
    case 'educationStart':
    case 'educationEnd':
      return {
        ...state,
        education: {
          ...state.education,
          ...action.payload,
        },
      };
    case 'eduSubmit':
      return {
        ...state,
        educationData: [
          ...state.educationData,
          { id: uniqid(), ...state.education },
        ],
        education: {
          ...initialState.education,
        },
      };
    case 'eduDelete':
      return {
        ...state,
        educationData: state.educationData.filter(
          (edu) => edu.id !== action.payload
        ),
      };

    case 'companyName':
    case 'position':
    case 'from':
    case 'to':
    case 'expDescr':
      return {
        ...state,
        experience: {
          ...state.experience,
          ...action.payload,
        },
      };

    case 'expSubmit':
      return {
        ...state,
        experienceData: [
          ...state.experienceData,
          { id: uniqid(), ...state.experience },
        ],
        experience: {
          ...initialState.experience,
        },
      };

    case 'expDelete':
      return {
        ...state,
        experienceData: state.experienceData.filter(
          (exp) => exp.id !== action.payload
        ),
      };

    case 'projectName':
    case 'institution':
    case 'projectStart':
    case 'projectEnd':
    case 'projectDescr':
      return {
        ...state,
        project: {
          ...state.project,
          ...action.payload,
        },
      };

    case 'projSubmit':
      return {
        ...state,
        projectsData: [
          ...state.projectsData,
          { id: uniqid(), ...state.project },
        ],
        project: {
          ...initialState.project,
        },
      };

    case 'projDelete':
      return {
        ...state,
        projectsData: state.projectsData.filter(
          (proj) => proj.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
