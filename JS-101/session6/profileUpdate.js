// Problem Description
// Use the object userDetails given here

const userDetails = {

    name: {
      first: "Kapil",
      last: "Raghuwanshi",
    },
    jobTitle: "JS Instructor @ Crio.do",
    email: {
      work: "kapil@epsilon.com",
      personal: "",
    },
    status: {
      isOnline: true,
      isVerified: false,
    }
  }

// Update the first and last properties with your details.
userDetails.name.first="Shubham";
userDetails.name.last='Karad'

// Add new property isProMember to the status and set it to false.
userDetails.status.isPromember=false;

console.log(userDetails)