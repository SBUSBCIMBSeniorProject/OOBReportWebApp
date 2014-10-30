/*
 * A space goes after "if" 
 */

function elevated_risk()
{
	var ers_check = document.getElementById("elevated_risk_check");
	var ers_text = document.getElementById("elevated_risk_situation");  

	if (ers_check.checked)
	{
		ers_text.style.display = "block"; 
	}
	else
	{
		ers_text.style.display = "none"; 
	}
}//function elevated_risk

function transportation_choice()
{
	var mode = document.getElementById("mode_of_travel"); 
	var plane_mode = document.getElementById("plane_mode_of_travel");
	var vehicle_mode = document.getElementById("vehicle_mode_of_travel"); 
	var train_mode = document.getElementById("train_mode_of_travel");
	var other_mode = document.getElementById("other_mode_of_travel"); 


	if (mode.value == "Plane")
	{
		
		plane_mode.style.display = "block";
		vehicle_mode.style.display = "none";
		train_mode.style.display = "none";
		other_mode.style.display = "none";
	}
	else if (mode.value == "Vehicle")
	{
		//overall options 
		vehicle_mode.style.display = "block";
		plane_mode.style.display = "none";
		train_mode.style.display = "none";
		other_mode.style.display = "none";
	}
	else if (mode.value == "Train")
	{
		train_mode.style.display = "block";
		plane_mode.style.display = "none";
		vehicle_mode.style.display = "none";
		other_mode.style.display = "none";
	}
	else if (mode.value == "Other")
	{
		other_mode.style.display = "block";
		plane_mode.style.display = "none";
		vehicle_mode.style.display = "none";
		train_mode.style.display = "none";
	}
	else
	{
		other_mode.style.display = "none";
		plane_mode.style.display = "none";
		vehicle_mode.style.display = "none";
		train_mode.style.display = "none";
	}
}//function transportation_choice

function vehicle_type_choice()
{
	//car options 
	var vehicle_type = document.getElementById("type_of_vehicle"); 
	var public_vehicle = document.getElementById("vehicle_type_public");
	var private_vehicle = document.getElementById("vehicle_type_private");
	var rental_vehicle = document.getElementById("vehicle_type_rental"); 

	if (vehicle_type.value == "Rental")
	{
		public_vehicle.style.display = "none";
		private_vehicle.style.display = "none"; 
		rental_vehicle.style.display = "block";
	}
	else if (vehicle_type.value == "Private")
	{
		public_vehicle.style.display = "none";
		private_vehicle.style.display = "block"; 
		rental_vehicle.style.display = "none";
	}
	else if (vehicle_type.value == "Public")
	{
		public_vehicle.style.display = "block";
		private_vehicle.style.display = "none"; 
		rental_vehicle.style.display = "none";
	}
	else
	{
		public_vehicle.style.display = "none";
		private_vehicle.style.display = "none"; 
		rental_vehicle.style.display = "none";
	}
}//function vehicle_type_choice

function plane_type_choice()
{
	var plane_type = document.getElementById("type_of_plane"); 
	var commercial_plane = document.getElementById("plane_type_commercial");
	var private_plane = document.getElementById("plane_type_private"); 

	if (plane_type.value == "Commercial")
	{
		commercial_plane.style.display = "block"; 
		private_plane.style.display = "none"; 
	}
	else if (plane_type.value == "Private")
	{
		commercial_plane.style.display = "none"; 
		private_plane.style.display = "block"; 
	}
	else
	{
		commercial_plane.style.display = "none"; 
		private_plane.style.display = "none"; 
	}
}//function plane_type_choice

function lodging_choice()
{
	var lodging = document.getElementById("lodging_check");
	var lodging_show = document.getElementById("lodging_section");

	if (lodging.value == "Yes")
	{
		lodging_show.style.display = "block";
	}
	else
	{
		lodging_show.style.display = "none"; 
	}

}//function lodging_choice

function lodging_type()
{
	var stay = document.getElementById("type_of_lodging"); 
	var hotel = document.getElementById("lodging_type_hotel"); 
	var private_res =  document.getElementById("lodging_type_private_residence"); 
	var other_res = document.getElementById("lodging_type_other"); 

	if (stay.value == "Hotel")
	{
		hotel.style.display = "block"; 
		private_res.style.display = "none"; 
		other_res.style.display = "none"; 
	}
	else if (stay.value == "Private_residence")
	{
		hotel.style.display = "none"; 
		private_res.style.display = "block"; 
		other_res.style.display = "none"; 
	}
	else if (stay.value == "Other")
	{
		hotel.style.display = "none"; 
		private_res.style.display = "none"; 
		other_res.style.display = "block"; 
	}
	else
	{
		hotel.style.display = "none"; 
		private_res.style.display = "none"; 
		other_res.style.display = "none"; 
	}
}//function lodging_type
