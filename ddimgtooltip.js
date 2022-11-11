/* Image w/ description tooltip v2.0
* Created: April 23rd, 2010. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/


var ddimgtooltip={

	tiparray:function(){
		var tooltips=[]
		//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
		//For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
		//For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

		tooltips[0]=["thumbs2/PAN1-95-58-1_Visitors_at_Mt-Baldy.jpg", "View from Mt. Baldhead post 1900", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[1]=["thumbs2/PAN2-Saugatuck_From_Baldhead_July_1909_96-1-3.jpg", "View from Mt. Baldhead 1909", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[2]=["thumbs2/PAN3-96-105-1_saugatuck_1878-.jpg", "View from Mt. Baldhead 1878", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[3]=["thumbs2/PAN4-89-1-207_Saugatuck_1892.jpg", "View from Mt. Baldhead 1892", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[4]=["thumbs2/PAN5-95-89-3-Saug-from-BH.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[5]=["thumbs2/PAN6-fromMtBaldy1909.jpg", "View from Mt. Baldhead 1909", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[6]=["thumbs2/PAN7-fromMtBaldyBeforePav.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[7]=["thumbs2/PAN8-Deam22.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[8]=["thumbs2/PAN9-Deam21.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[9]=["thumbs2/PAN10-Deam23.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[10]=["thumbs2/PAN11-Panorama_ca_1929_1200.jpg", "View from Mt. Baldhead 1929", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[11]=["thumbs2/PAN12-Baldhead_panorama_ca_1931_1200.jpg", "View from Mt. Baldhead 1931", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[12]=["thumbs2/PAN13-Baldhead_panorama_ca_1940_1200.jpg", "View from Mt. Baldhead 1940", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[13]=["thumbs2/A1-96-105-31_Saugatuck_from_Ferry_INN.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[14]=["thumbs2/A1a-WaterfrontPark_St_ca1950.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[15]=["thumbs2/A1b-bf011.jpg", "A1b", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[16]=["thumbs2/A1c-FerryLanding96-1-14.jpg", "A1c", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[17]=["thumbs2/A2-89-1-46_C_Old_Chain_Ferry.jpg", "Old Chain Ferry circa 1915", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[18]=["thumbs2/A3-95-105-2_Ferry_Landing_foot_of_Mary_St-1890.jpg", "Ferry Landing 1890", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[19]=["thumbs2/A3a-Kontio_chain_ferry_ca_1920.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[20]=["thumbs2/A4-a696.jpg", "A4", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[21]=["thumbs2/A4a-Waterfront_ca_1885_maybe.jpg", "Old John B. Martell shipyard,<br />then owned by Capt R. C. Brittain", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[22]=["thumbs2/A4b-a695.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[23]=["thumbs2/A5-Wright_Line_boat.jpg", "The Tours Home Hotel was assembled<br />from buildings moved to the site<br />including a Singapore warehouse, a<br />blacksmith shop and parts of the Iron<br />Clad basket factory. In 1933, the name<br />was changed to Mount Baldhead Hotel<br />and in 1959 consumed by fire.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[24]=["thumbs2/A5a-96-105-20_Tourist_Home_Wright_Line_Chain_Ferry_Scow.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[25]=["thumbs2/A6-a693.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[26]=["thumbs2/A6a-a584A.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[27]=["thumbs2/A6b-Ferry_with_car_and_people_ca_39.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[28]=["thumbs2/A7-95-89-2-Chain-ferry.jpg", "A7", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[29]=["thumbs2/A7a-ChainFerryCa1907.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[30]=["thumbs2/A7b-89-1-46_B_Chain_Ferry.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[31]=["thumbs2/A8-a183.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[32]=["thumbs2/A8A-Cap_Brittain_at_ferry.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[33]=["thumbs2/A9-a692.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[34]=["thumbs2/A9a-a696A.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[35]=["thumbs2/A9b-a694.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[36]=["thumbs2/A9c-bf010.jpg", "The Tours Home Hotel was assembled<br />from buildings moved to the site<br />including a Singapore warehouse, a<br />blacksmith shop and parts of the Iron<br />Clad basket factory. In 1933, the name<br />was changed to Mount Baldhead Hotel<br />and in 1959 consumed by fire.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[37]=["thumbs2/A9d-a437.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[38]=["thumbs2/A9e-Baldhead_Hotel_Gentiles_ca_1936.jpg", "Mount Baldhead Hotel was originally<br />The Tourist Home Hotel before 1933,<br />it was lost to fire in 1959.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[39]=["thumbs2/A10-96-105-30_FERRY_SCOW.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[40]=["thumbs2/A10a-Ferry_with_horse_wagon.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[41]=["thumbs2/A10b-Ferry_scene_postcard_ca_1915.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[42]=["thumbs2/A10c-Deam32.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[43]=["thumbs2/A10d-96-105-33_Ferry_Inn.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[44]=["thumbs2/A11-Charles_McVea_building_1888.jpg", "The steamer Charles McVea being built<br />in 1888 for Capt. Ralph C. Brittain by<br />his partner, James Elliott. The ship was<br />123 ft long an was in use until 1923.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[45]=["thumbs2/A12-a548C.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[46]=["thumbs2/A12a-a548A.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[47]=["thumbs2/A12b-a548.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[48]=["thumbs2/A13-96-105-8_Yacht_Stranger_.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[49]=["thumbs2/B1-89-1-220_Schaberg_Bldg.jpg", "Schaberg Building in 1880", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[50]=["thumbs2/B2-wk47sola.jpg", "Commercial Record circa 1908", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[51]=["thumbs2/B3-94-1-16A_First_Congregational_Church.jpg", "First Congregational Church pre 1898,<br /> with wooden siding and old bell tower", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[52]=["thumbs2/B3a-94-1-16B_Congregational_Church.jpg", "First Congregational Church post 1898<br /> with brick and new bell tower.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[53]=["thumbs2/B4-a131A.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[54]=["thumbs2/B4a-a131.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[55]=["thumbs2/B5-The_Hotel_Maplewood_Saugatuck_96-1-37.jpg", "The Maplewood Hotel, built in the<br />1860s, it was constructed on the site<br />of the Burns & Whitney general store.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[56]=["thumbs2/b5a-a444.jpg", "The Maplewood Hotel in the 1950s,<br />constructed on the original site of<br />the Burns & Whitney general store.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[57]=["thumbs2/B5b-a199.jpg", "Maplewood Hotel, 428 Butler Street", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[58]=["thumbs2/C1-95-72-10_Big_Pavilion.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[59]=["thumbs2/C1a-Pavilion_from_Hardings_1958.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[60]=["thumbs2/C1b-Pavilion_ca_1940_with_yachts_at_anchor.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[61]=["thumbs2/C1c-Pavilion_and_Hotel_Saugatuck_ca_1955.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[62]=["thumbs2/C1d-Pavilion_from_Park_st_ca_1940.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[63]=["thumbs2/C1e-cvba_Pavilion_ca_1940.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[64]=["thumbs2/C1f-BigPavilion.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[65]=["thumbs2/C1g-Pavilion_ca_1938_Archives.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[66]=["thumbs2/C2-1960-Pavilion-fire-from-sw_1.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[67]=["thumbs2/C3-bf006.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[68]=["thumbs2/C4-ca_1956_Pavilion_postcard_tu.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[69]=["thumbs2/C4a-Pavilion_ca_1955.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[70]=["thumbs2/C4b-Pavilion_dock_and_yachtsA.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[71]=["thumbs2/C4c-Pavilion_dock_and_yachts_ca_1936.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[72]=["thumbs2/C4d-Joan_Philips_Pavilion.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[73]=["thumbs2/C5-bf007.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[74]=["thumbs2/C5a-bf027.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[75]=["thumbs2/C6-Pavilion_Water_carnival_B.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[76]=["thumbs2/C7-a565B.jpg", "Pavilion dock circa 1952", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[77]=["thumbs2/C7a-a601.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[78]=["thumbs2/C7b-a732810.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[79]=["thumbs2/C7c-Big_Pavilion_ca_1952.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[80]=["thumbs2/C7d-a583.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[81]=["thumbs2/C8-a791.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[82]=["thumbs2/C9-bf009.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[83]=["thumbs2/C9a-Pavilion_construction_1909.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[84]=["thumbs2/C10-a595.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[85]=["thumbs2/D1-Saugatuck__Street_scene.jpg", "Hotel Saugatuck circa 1919 with Mrs.<br />McGregor's Beauty Parlor to the right.<br /> <br />Original site of Kleeman's Saloon, then<br />remodeled the Kalamazoo Hotel in 1900<br />rebuilt as Leiendecker's Inn in 1901,<br />renamed Columbia Hotel in 1911, <br />renamed  Hotel Saugatuck in 1919,<br />and then renamed Coral Cables in 1958", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[86]=["thumbs2/D1a-Liendeckers___Pavilion_1910.jpg", "Liendecker Inn in 1910", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[87]=["thumbs2/D2-96-205-29_Columbia_.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[88]=["thumbs2/D2a-Deam11.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[89]=["thumbs2/D3-89-1-47_Columbia_Hotel.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[90]=["thumbs2/D3a-IlForno-NightPostcard.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[91]=["thumbs2/D4-Pavilion_entrance.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[92]=["thumbs2/D4a-Pavilion_crowd_4_Jul_tu.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[93]=["thumbs2/D4b-a028B.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[94]=["thumbs2/D5-a376.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[95]=["thumbs2/D5a-89-1-90_C_Gas_Truck_Fire_1948.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[96]=["thumbs2/D6-89-1-90_Fire_Mason_Water.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[97]=["thumbs2/D7-89-1-90_B_Gas_Truck_Fire_1948.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[98]=["thumbs2/D8-96-105-40_Pavilion-Interurban_Car.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[99]=["thumbs2/D8a-Pavilion_ca_1933.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[100]=["thumbs2/D8b-Big_Pavilion__ca_1944.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[101]=["thumbs2/D9-a372.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[102]=["thumbs2/E1-ButlerStSummer.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[103]=["thumbs2/E2-BG_OR_p55_Parade.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[104]=["thumbs2/E2a-Saugatuck__Butler_Street(3).jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[105]=["thumbs2/E2b-Saugatuck__Butler_Street(2).jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[106]=["thumbs2/E3-Flints_Quality_Store_96-1-68tu.jpg", "A.B. Taylor Store/Landmark Bldg/Flints", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[107]=["thumbs2/E3a-Saugatuck__Butler_Street.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}] 
		tooltips[108]=["thumbs2/E3b-a152.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[109]=["thumbs2/E4-a035.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[110]=["thumbs2/E5-a047.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[111]=["thumbs2/E6-SaugtuckParade1955.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[112]=["thumbs2/E7-a678.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[113]=["thumbs2/E8-a676.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[114]=["thumbs2/E9-scan0001.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[115]=["thumbs2/F1-89-1-240_Dr_Stimson-Drugstore.jpg", "The Stimson Drugstore Building,<br />burned in the fire of 1886, rebuilt and<br /> later used as the Davis restaurant, still<br /> later the foundation used for the Davis<br /> Hotel, later known as the Crow Hotel.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[116]=["thumbs2/F2-96-105-27_Green_Parrot_Cafe-Sorenson_Bldg.jpg", "The Sorenson Building<br />built circa 1913, with<br />the Green Parrot Cafe", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[117]=["thumbs2/F3-95_89_6_Oxen_on_Butler_St.jpg", "On the left, the former Stimson Building<br /> then the Davis restaurant with the Crow<br /> Brothers Barbershop to the right, where<br /> the Sand Bar Saloon now stands", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[118]=["thumbs2/F4-a433.jpg", "The Elms Hotel,<br />the John Francis House.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[119]=["thumbs2/F5-Saugatuck__Street_scene(3).jpg", "The Leland Building built in 1904", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[120]=["thumbs2/F6-73-Civil-war-parade-ca1918.jpg", "Civil War Parade 1918", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[121]=["thumbs2/F6a-ButlerSt1950sPostCard.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[122]=["thumbs2/F7-Kontio_Butler_St_ca_1918_tu.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[123]=["thumbs2/F7a-89-1-40_ButlerSt.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[124]=["thumbs2/F7b-89-1-40_Butler_Street_no.jpg", "From Culver St. looking north up<br /> Butler St., circa 1902", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[125]=["thumbs2/F7c-96-105-10_Butler_St-1915.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[126]=["thumbs2/F7d-SaugSleighs.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[127]=["thumbs2/F7e-LelandTeaRoom.jpg", "The Leland Building built in 1904", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[128]=["thumbs2/F8-Leland_Lodge-wing_moved.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[129]=["thumbs2/F8a-a441.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[130]=["thumbs2/F9-Village_hall_1929_restored2.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[131]=["thumbs2/F9a-a420.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[132]=["thumbs2/F10-96-105-39_Butler_St-1925.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[133]=["thumbs2/F10a-ButlerST-PRE1914.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[134]=["thumbs2/F10b-96-105-38_Butler_St-1907.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[135]=["thumbs2/F10c-Saugatuck1950.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[136]=["thumbs2/G1-Postcard_Hotel_Butler_1910.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[137]=["thumbs2/G2-bf021.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[138]=["thumbs2/G3-The_Butler_96-1-48.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[139]=["thumbs2/G4-89-1-113_B_Butler_Hotel.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[140]=["thumbs2/G5-89-1-122_Interurban_Depot.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[141]=["thumbs2/G5a-Interurban_1900.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[142]=["thumbs2/G6-Kontio-Interurban_ca_1910.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[143]=["thumbs2/H1-95-28-1e_Saug_Fruit_Exchange.jpg", "Saugatuck Fruit Exchange,<br /> later Saugatuck Lumber Co.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[144]=["thumbs2/H2-96-105-12_Saugatuck_Fruit_Exchange.jpg", "Saugatuck Fruit Exchange,<br /> later Saugatuck Lumber Co.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[145]=["thumbs2/H3-96-105-32_Reed_s_Livery.jpg", "Reed's Livery and Transfer Line, built<br />in 1905 on the site of the  Sherwood<br />House hotel, aka old Union House<br />Hotel, it served as the village fire<br />station during the 1950s.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[146]=["thumbs2/H4-89-1-99_Griffin_Henry_Mill.jpg", "Griffin and Henry Sawmill in 1897<br />site of the M. B. Spencer Mill in 1846,<br />in 1850 the Wells & Johnson Mill,<br />then the Stockbridge & Johnson Mill,<br />in 1879 the Griffin & Williams mill,<br />in 1885 the Griffin & Henry Lumber Co.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[147]=["thumbs2/H4a-Griffin-Henry_sawmill.jpg", "Griffin and Henry Sawmill circa 1897<br />1st Stockbridge & Johnson Lumber Co.,<br />1879 the Griffin & Williams Lumber Co.,<br />in 1885 the Griffin & Henry Lumber Co.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[148]=["thumbs2/J1-a428.jpg", "Hotel Casablanca", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[149]=["thumbs2/J1a-HotelCasablanca-1940s.jpg", "Hotel Casablanca 1940's", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[150]=["thumbs2/J1b-Roamers_Inn.jpg", "Roamer's inn, aka Hotel Casablanca", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[151]=["thumbs2/K1-89-1-141_Old_Meth-Church_1900.jpg", "Old Methodist Church 1900", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[152]=["thumbs2/C4e-Pavilion_water_carnival_ca_1936.jpg", "", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[153]=["thumbs2/A6c-89-1-46_A_Chain_Ferry.jpg", "A6c", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[154]=["thumbs3/obs012506-1.jpg", "Search or Browse the Photo Collection", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[155]=["thumbs3/HMlogo.jpg", "Explore more", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[156]=["thumbs3/obslogo.jpg", "Learn more", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[157]=["thumbs3/100B-Butler-1958.jpg", "More Photo Resources", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[158]=["thumbs3/obs061505-4.jpg", "Mt. Baldhead", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[159]=["thumbs3/obs061505-3.jpg", "When available", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[160]=["thumbs3/obs101106-2.jpg", "The Anna C. Wilson", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[161]=["thumbs3/TheDouglas.jpg", "The Douglas (1882-1920), one of<br />the Ships Built in Saugatuck from<br />the Great Lakes Maritime Database", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[162]=["thumbs3/obs101106-3.jpg", "Launch of Steamer R. C. Reid", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[163]=["thumbs3/obs092706-4.jpg", "Captain Crawford's House", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[164]=["thumbs3/obs101106-2.jpg", "The Anna C. Wilson", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[165]=["thumbs3/obs090706-4aLadyMay.jpg", "Early Riverboats", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[166]=["thumbs3/obs083006-6.jpg", "The Beach Boats", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[167]=["thumbs3/obs071906-1.jpg", "The Christian Science Church", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[168]=["thumbs3/obs071906-4.jpg", "Maplewood Hotel", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[169]=["thumbs3/obs071906-3.jpg", "The Fursman - Hoeksema House", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[170]=["thumbs3/obs062806-1.jpg", "H. Schnobel's Hardware Store", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[171]=["thumbs3/obs062806-3.jpg", "John Koning's Hardware", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[172]=["thumbs3/obs062806-2.jpg", "Nies and Koning's Hardware", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[173]=["thumbs2/F1-89-1-240_Dr_Stimson-Drugstore.jpg", "Dr. Stimson Drugstore", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[174]=["thumbs3/obs062106-3.jpg", "Landmark Building", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[175]=["thumbs3/obs062106-2.jpg", "Christ Walz. The Boss Market", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[176]=["thumbs3/obs061406-1.jpg", "The Dole house", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[177]=["thumbs3/obs060106-2.jpg", "Big Pavilion Fire", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[178]=["thumbs3/obs052406-2a.jpg", "Reed's Livery", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[179]=["thumbs3/obs051706-3.jpg", "The schooner George M. Case", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[180]=["thumbs3/obs051006-2.jpg", "321 Water St.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[181]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[182]=["thumbs3/obs051006-1.jpg", "521 Butler St", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[183]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[184]=["thumbs3/obs050306-4.jpg", "The Pavilion dock", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[185]=["thumbs3/obs122805-2.jpg", "Big Pavilion Middle Years", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[186]=["thumbs3/obs041906-3.jpg", "Big Pavilion Early Years", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[187]=["thumbs3/obs032206-2.jpg", "Built on the Banks of the Kalamazoo", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[188]=["thumbs3/obs030806-1.jpg", "North and South American", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[189]=["thumbs3/obs030206-6a.jpg", "SS South American", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[190]=["thumbs3/obs022206-5.jpg", "Simonson Studio", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[191]=["thumbs3/obs022206-2.jpg", "Simonson Postcard Stand", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[192]=["thumbs3/201Culver-EG-0041T.jpg", "More photos of the 200 Block of Culver", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[193]=["thumbs3/obs020106-5.jpg", "Miller Robinson", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[194]=["thumbs3/obs011806-3.jpg", "Simonson Photo Studio No. 2", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[195]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[196]=["thumbs3/obs011106-1.jpg", "The Dock at Mason St.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[197]=["thumbs3/obs122805-3.jpg", "A Star is Born", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[198]=["thumbs3/obs121405-2.jpg", "First Light", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[199]=["thumbs3/obs120705-4.jpg", "Interurban", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[200]=["thumbs3/obs113005-4.jpg", "Big Bands", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[201]=["thumbs3/obs112305-3.jpg", "Pokagon Hotel", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[202]=["thumbs3/obs062205-2.jpg", "Pump House", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[203]=["thumbs3/obs062205-1.jpg", "View of Pump House", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[204]=["thumbs3/obs051105-1.jpg", "Richest man", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[205]=["thumbs3/obs042005-1.jpg", "Wheeler Building aka Buffalo House<br />William A. Ward era Post Office in 1869", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[206]=["thumbs3/obs031605-1.jpg", "Leiendecker Inn in 1910", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[207]=["thumbs3/obs031605-2.jpg", "The Columbia Hotel circa 1915<br />aka Leiendecker Inn", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[208]=["thumbs3/obs021605-3.jpg", "Congregational Church", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[209]=["thumbs3/obs020205-2.jpg", "Hotel Hamilton circa 1913<br />Saugatuck House", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[210]=["thumbs3/lelandLodge.jpg", "Morrison House aka Leland Lodge", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[211]=["thumbs3/100bButler-thumb.jpg", "More Photos of this block", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[212]=["thumbs3/wk01sol.jpg", "Saugatuck Volunteer Fire Department", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[213]=["thumbs3/wk03sol.jpg", "Saugatuck House", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[214]=["thumbs3/200BlockButtler.jpg", "More Photos of this block", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[215]=["thumbs3/wk04sol.JPG", "Ford Garage", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[216]=["thumbs3/wk09sol.jpg", "Interurban from the Butler Hotel", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[217]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[218]=["thumbs3/obs062806-1.jpg", "Schnobel Hardware", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[219]=["thumbs3/wk11sol.jpg", "The Rochester", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[220]=["thumbs3/wk16sol.jpg", "Old woman and auto", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[221]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[222]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[223]=["thumbs3/wk18sol.jpg", "New Bird Drugstore Building", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[224]=["thumbs3/wk29sol.jpg", "Band Stand in Public Square", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[225]=["thumbs3/wk43sol.jpg", "Hollyhock restaurant", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[226]=["thumbs3/wk48sol.jpg", "The Harmony Eat Shop", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[227]=["thumbs3/wk52sol.jpg", "Bray's Log Cabin Tavern", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[228]=["thumbs3/wk55sol.jpg", "Auto by Reed's Livery", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[229]=["thumbs3/wk58sol.jpg", "Corner of Park and Perryman", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[230]=["thumbs3/wk60sol.jpg", "Wick's Park", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[231]=["thumbs3/wk61sol.jpg", "Saugatuck Yacht Club", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[232]=["thumbs3/wk62sol.jpg", "Fishhouse", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[233]=["thumbs3/wk66sol.jpg", "Harding Hotel", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[234]=["thumbs3/wk70sol.jpg", "Judson House", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[235]=["thumbs3/wk75sol.jpg", "Dismantling the Hamilton Hotel", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[236]=["thumbs3/wk78sol.jpg", "Mt. Baldhead Hotel fire", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[237]=["thumbs3/wk79sol.jpg", "Chain Ferry", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[238]=["thumbs3/wk83sol.jpg", "Ferry Store", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[239]=["thumbs3/wk88sol.jpg", "Reed's Livery", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[240]=["thumbs3/wk89sol.jpg", "East side Pavilion aka roller rink", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[241]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[242]=["thumbs3/wk101sol.jpg", "Reed's Livery", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[243]=["thumbs3/wk102sol.jpg", "Bert Cartwright family", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[244]=["thumbs3/wk105sol.jpg", "Grace Hotel aka Hotel Casablanca", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[245]=["thumbs3/wk123sol.jpg", "Old Bird Drugstore", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[246]=["thumbs3/wk125sol.jpg", "House at Butler and Hoffman", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[247]=["thumbs3/wk134sol.jpg", "Carl Bird boat builder", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[248]=["thumbs3/wk135sol.jpg", "West side of 100 block of Butler St.", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[249]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[250]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[251]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[252]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[253]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[254]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[255]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[256]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[257]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[258]=["thumbs3/EG20012-N-AmericanT.jpg", "The big Ships that came and went", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[259]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[260]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[261]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[262]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[263]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[264]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[265]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[266]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[267]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[268]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[269]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[270]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[271]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[272]=["thumbs3/wk92sol.jpg", "Brittain House aka Johnson house", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[273]=["thumbs3/k2-89-1-125_Johnson_Home.jpg", "K2- O. R. Johnson house", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[274]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[275]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[276]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[277]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[278]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[279]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[280]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[281]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[282]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[283]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[284]=["thumbs3/YachtClub1948.jpg", "More Yacht Club Photos", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[285]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[286]=["thumbs3/EG-0119T.jpg", "1st block of Butler", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[287]=["thumbs3/300MasonBlock-EG30016b.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[288]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[289]=["thumbs3/EG30016aT.jpg", "More Photos of this block", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[290]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[291]=["thumbs3/EG-0130T.jpg", "River Traffic", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[292]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[293]=["thumbs3/220Water-EG-0057T.jpg", "More Photos of this block", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[294]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[295]=["thumbs3/Butler-Mason-1901t.jpg", "Bank and Landmark Store", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[296]=["thumbs3/89-1-19_Pavilion-SimonsonT.jpg", "More Photos of the Pavilion", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[297]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[298]=["thumbs3/EG-0046AT.jpg", "Iceboat near Hotel Butler", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[299]=["thumbs3/EmptyfolderA.jpg", "More Photos soon", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		tooltips[300]=["", "EMPTY SLOT", {background:"#FFFFFF", color:"black", border:"2px ridge darkblue"}]
		
		
		
		
		

		return tooltips //do not remove/change this line
	}(),

	tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

	//***** NO NEED TO EDIT BEYOND HERE

	tipprefix: 'imgtip', //tooltip ID prefixes

	createtip:function($, tipid, tipinfo){
		if ($('#'+tipid).length==0){ //if this tooltip doesn't exist yet
			return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(
				'<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>'
				+ ((tipinfo[1])? '<div style="text-align:left; margin-top:5px">'+tipinfo[1]+'</div>' : '')
				)
			.css(tipinfo[2] || {})
			.appendTo(document.body)
		}
		return null
	},

	positiontooltip:function($, $tooltip, e){
		var x=e.pageX+this.tooltipoffsets[0], y=e.pageY+this.tooltipoffsets[1]
		var tipw=$tooltip.outerWidth(), tiph=$tooltip.outerHeight(), 
		x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(ddimgtooltip.tooltipoffsets[0]*2) : x
		y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
		$tooltip.css({left:x, top:y})
	},
	
	showbox:function($, $tooltip, e){
		$tooltip.show()
		this.positiontooltip($, $tooltip, e)
	},

	hidebox:function($, $tooltip){
		$tooltip.hide()
	},


	init:function(targetselector){
		jQuery(document).ready(function($){
			var tiparray=ddimgtooltip.tiparray
			var $targets=$(targetselector)
			if ($targets.length==0)
				return
			var tipids=[]
			$targets.each(function(){
				var $target=$(this)
				$target.attr('rel').match(/\[(\d+)\]/) //match d of attribute rel="imgtip[d]"
				var tipsuffix=parseInt(RegExp.$1) //get d as integer
				var tipid=this._tipid=ddimgtooltip.tipprefix+tipsuffix //construct this tip's ID value and remember it
				var $tooltip=ddimgtooltip.createtip($, tipid, tiparray[tipsuffix])
				$target.mouseenter(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.showbox($, $tooltip, e)
				})
				$target.mouseleave(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.hidebox($, $tooltip)
				})
				$target.mousemove(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.positiontooltip($, $tooltip, e)
				})
				if ($tooltip){ //add mouseenter to this tooltip (only if event hasn't already been added)
					$tooltip.mouseenter(function(){
						ddimgtooltip.hidebox($, $(this))
					})
				}
			})

		}) //end dom ready
	}
}

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]")