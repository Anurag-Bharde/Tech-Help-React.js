interface BloodPressure {
    value: number;
    levels: string;
  }
  
  interface DiagnosisRecord {
    month: string;
    year: number;
    blood_pressure: {
      systolic: BloodPressure;
      diastolic: BloodPressure;
    };
    heart_rate: BloodPressure;
    respiratory_rate: BloodPressure;
    temperature: BloodPressure;
  }
  
  interface Diagnostic {
    name: string;
    description: string;
    status: string;
  }
  
 export interface Patient {
    name: string;
    gender: string;
    age: number;
    profile_picture: string;
    date_of_birth: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
    diagnosis_history: DiagnosisRecord[];
    diagnostic_list: Diagnostic[];
    lab_results: string[];
  }