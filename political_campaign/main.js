let campaign_data_structure = {
    district: "",
    platform: {
      taxes: "",
      jobs: "",
      infrastructure: "",
      health_care: "",
      crime_enviroment: ""
    },
    donation_URL: "",
    calendar_events: [
      {
        date_event: "",
        overview_event: ""
      },
      {
        date_event: "",
        overview_event: ""
      },
      {
        date_event: "",
        overview_event: ""
      }
    ],
    volunteer_info: {
      name: "",
      address: "",
      email: "",
      phone_number: "",
      availability: "",
      activity_interest: []
    },
    biograpghy: "",
    image_gallery: {
      head_photo: "",
      family_photo: "",
      constituent_photo: []
    },
    mission_statement: "",
    vote_reg_URL: ""
  };
  
  function changeDistrict (district) {
      campaign_data_structure.district = district;
  }
  
  function addToPlatform(subject, info) {
    campaign_data_structure.platform[subject] = info;
  }
  
  function changeDonationURL(url) {
    campaign_data_structure.donation_URL = url
  }
  
  function addCalEvent(dateInfo, info) {
      campaign_data_structure.calendar_events.push({date: dateInfo, overview_event: info})
  }
  
  
  changeDistrict("Sumner");
  addToPlatform("taxes", "They will be gone");
  changeDonationURL("http://www.peggyhill.com");
  addCalEvent("8-12-14", "Fundraiser");
  
  console.log(campaign_data_structure);