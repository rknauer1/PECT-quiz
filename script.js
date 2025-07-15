const questions = [
    // NFPA 96 Standards
    {
        "question": "A routine inspection of a kitchen exhaust system reveals a grease accumulation of 0.08 inches. What is the required course of action according to NFPA 96?",
        "options": ["A. Schedule a cleaning within the next 30 days.", "B. Note the accumulation and inspect again at the next scheduled interval.", "C. The system requires cleaning before the next use.", "D. Inform the owner that the system is non-compliant but no immediate action is needed."],
        "correctAnswer": "C. The system requires cleaning before the next use.",
        "explanation": "NFPA 96 requires the system to be cleaned if found to be contaminated with grease deposits. An accumulation of 0.08 inches (approx. 2000 microns) is well above the 50-micron cleaning threshold."
    },
    {
        "question": "What is the minimum cleaning requirement for combustible contaminants inside a kitchen exhaust system?",
        "options": ["A. Cleaned down to the bare metal.", "B. Cleaned to a depth of 0.002 inches (50 microns).", "C. Cleaned to a depth of 0.02 inches (500 microns).", "D. Cleaned until no black carbon is visible."],
        "correctAnswer": "B. Cleaned to a depth of 0.002 inches (50 microns).",
        "explanation": "An exhaust system must be cleaned, at a minimum, to remove combustible contaminants down to a depth of 0.002 inches or 50 microns."
    },
    {
        "question": "A 24-hour restaurant primarily uses wok-style cooking. How often must its kitchen exhaust system be inspected for grease buildup?",
        "options": ["A. Annually", "B. Semiannually", "C. Quarterly", "D. Monthly"],
        "correctAnswer": "C. Quarterly",
        "explanation": "According to NFPA 96, systems serving high-volume cooking operations like wok cooking require quarterly inspections."
    },
    {
        "question": "A church kitchen is used for pancake breakfasts twice a year. What is the minimum required inspection frequency for its exhaust system?",
        "options": ["A. Annually", "B. Semiannually", "C. Quarterly", "D. Monthly"],
        "correctAnswer": "A. Annually",
        "explanation": "Systems with low-volume cooking, such as those in churches, must be inspected at least annually."
    },
    {
        "question": "A family-style restaurant operates for lunch and dinner and experiences steady business. What is the most likely inspection frequency required for its exhaust system?",
        "options": ["A. Annually", "B. Semiannually", "C. Quarterly", "D. Monthly"],
        "correctAnswer": "B. Semiannually",
        "explanation": "Kitchen exhaust systems serving moderate-volume cooking establishments must be inspected for cleanliness semiannually."
    },
    {
        "question": "A steakhouse uses a solid-fuel charbroiler for most of its cooking. What is the mandatory inspection frequency for its exhaust system?",
        "options": ["A. Monthly", "B. Quarterly", "C. Semiannually", "D. Annually"],
        "correctAnswer": "A. Monthly",
        "explanation": "NFPA 96 mandates that systems serving solid fuel cooking operations be inspected monthly."
    },
    {
        "question": "What is the NFPA 96 requirement for the entire kitchen exhaust system during a cleaning or inspection?",
        "options": ["A. Only the heavily soiled parts need to be accessed.", "B. All interior surfaces shall be made accessible for cleaning and inspection.", "C. The system should be accessible from the hood and the fan only.", "D. Areas that are not easily reachable can be noted as inaccessible and skipped."],
        "correctAnswer": "B. All interior surfaces shall be made accessible for cleaning and inspection.",
        "explanation": "NFPA 96 states that during a cleaning or inspection, all interior surfaces of the entire exhaust system shall be accessible."
    },
    {
        "question": "Which cleaning method is explicitly forbidden by NFPA 96 under all circumstances for removing hard carbon deposits?",
        "options": ["A. High-pressure steam", "B. Caustic chemical degreasers", "C. Hand scraping", "D. Using flammable solvents like gasoline"],
        "correctAnswer": "D. Using flammable solvents like gasoline",
        "explanation": "The use of gasoline or other flammable solvents is not acceptable under any circumstance for cleaning a kitchen exhaust system due to the extreme fire hazard."
    },
    {
        "question": "When a cleaning service is finished, what must be done with the old service stickers on the hood?",
        "options": ["A. They should be covered completely by the new sticker.", "B. They must all be removed from the hood.", "C. They can be left in place for historical record.", "D. They should be crossed out with a permanent marker."],
        "correctAnswer": "B. They must all be removed from the hood.",
        "explanation": "When affixing a new certificate or sticker, the technician must remove any old certificates to avoid confusion about the system's service status."
    },
    {
        "question": "What is the correct orientation for the baffles inside a standard baffle-type grease filter?",
        "options": ["A. Horizontal", "B. Vertical", "C. Alternating between vertical and horizontal", "D. At a 45-degree angle"],
        "correctAnswer": "B. Vertical",
        "explanation": "The proper orientation of the baffles in a filter is vertical to facilitate the capture and drainage of grease."
    },
    {
        "question": "What is the minimum required thickness for a grease duct constructed from carbon steel?",
        "options": ["A. 20 MSG (Manufacturer's Standard Gage)", "B. 18 MSG", "C. 16 MSG", "D. 14 MSG"],
        "correctAnswer": "C. 16 MSG",
        "explanation": "To ensure structural integrity and fire resistance, grease ducts made of carbon steel must be at least 16 MSG in thickness."
    },
    {
        "question": "What is a fundamental requirement for all grease duct systems?",
        "options": ["A. They must be internally welded and mechanically sealed.", "B. They must be constructed with internal support braces.", "C. They must be liquid-tight and feature continuous external welding on all seams.", "D. They must be wrapped in a minimum of two layers of fire-resistant material."],
        "correctAnswer": "C. They must be liquid-tight and feature continuous external welding on all seams.",
        "explanation": "Grease ducts are required to be liquid-tight, which is achieved with continuous external welding on all seams and joints to prevent grease leakage."
    },
    {
        "question": "What is the minimum clearance required between a grease duct and any combustible materials?",
        "options": ["A. 6 inches", "B. 12 inches", "C. 18 inches", "D. 24 inches"],
        "correctAnswer": "C. 18 inches",
        "explanation": "NFPA 96 requires all combustible materials to be a minimum of 18 inches away from the exhaust ductwork to prevent ignition in case of a duct fire."
    },
    {
        "question": "Where is it explicitly forbidden to install an access panel on ductwork?",
        "options": ["A. On the top side of a horizontal duct.", "B. On the bottom of a duct run.", "C. Within 5 feet of a change in direction.", "D. Directly opposite another access panel."],
        "correctAnswer": "B. On the bottom of a duct run.",
        "explanation": "It is not permissible to have access panels on the bottom of a duct because they can leak grease and present a fire hazard."
    },
    {
        "question": "When installing a new access panel in a horizontal duct, what is the minimum distance the edge of the opening must be from any welded seams or edges of the duct?",
        "options": ["A. 0.5 inches", "B. 1.0 inch", "C. 1.5 inches", "D. 2.0 inches"],
        "correctAnswer": "C. 1.5 inches",
        "explanation": "The edge of an access panel opening in a horizontal, non-listed duct must be at least 1.5 inches from all edges or welded seams of the duct to maintain structural integrity."
    },
    {
        "question": "For a fan with ductwork on both its intake and exhaust sides (an in-line fan), where must access for cleaning be provided?",
        "options": ["A. Within 3 feet of both the intake and exhaust sides of the fan.", "B. A single opening on top of the fan housing is sufficient.", "C. Within 5 feet of the fan on the downstream side only.", "D. By removing the fan from the ductwork entirely."],
        "correctAnswer": "A. Within 3 feet of both the intake and exhaust sides of the fan.",
        "explanation": "NFPA 96 requires that access be provided within 3 feet of both sides of an in-line fan to allow for proper cleaning of the fan blades and housing."
    },
    {
        "question": "What is the maximum size permitted for a grease receptacle on an upblast fan?",
        "options": ["A. 1 quart", "B. 2 quarts", "C. 1 gallon", "D. 2 gallons"],
        "correctAnswer": "C. 1 gallon",
        "explanation": "An upblast exhaust fan shall be provided with a grease receptacle that does not exceed 1 gallon in size to prevent large accumulations of grease on the roof."
    },
    {
        "question": "What component is required on upblast fan hinge assemblies to ensure technician safety?",
        "options": ["A. A spring-loaded closing mechanism.", "B. A lock-out pin.", "C. A hold-open retainer.", "D. A quick-release latch."],
        "correctAnswer": "C. A hold-open retainer.",
        "explanation": "A hold-open retainer is required on the hinge assembly of an upblast fan to prevent the fan from accidentally closing on a technician during service."
    },
    {
        "question": "What is the proper procedure for handling fusible links during a cleaning?",
        "options": ["A. Spray them directly with degreaser to clean them.", "B. Remove them before cleaning and reinstall them after.", "C. Cover and protect them from chemicals and pressure washing.", "D. Test their function by applying heat."],
        "correctAnswer": "C. Cover and protect them from chemicals and pressure washing.",
        "explanation": "Fusible links are sensitive heat-activated devices. They must be protected from chemicals or physical damage during cleaning, as this could impair their function or cause premature activation."
    },
    {
        "question": "Where should wastewater containing grease and cleaning chemicals be disposed of?",
        "options": ["A. Into the nearest storm drain.", "B. Into a mop sink or sanitary drain as allowed by the AHJ.", "C. Poured onto the gravel area behind the restaurant.", "D. Down the toilet."],
        "correctAnswer": "B. Into a mop sink or sanitary drain as allowed by the AHJ.",
        "explanation": "Waste should be disposed of in the manner prescribed by the Authority Having Jurisdiction (AHJ), which is typically a sanitary drain that leads to a water treatment facility."
    },
    {
        "question": "In the context of NFPA 96, what does the word 'shall' signify?",
        "options": ["A. A recommendation that is advised but not required.", "B. A suggestion for best practice.", "C. A mandatory and absolute requirement.", "D. An action left to the technician's discretion."],
        "correctAnswer": "C. A mandatory and absolute requirement.",
        "explanation": "NFPA 96 defines 'shall' as indicating a mandatory requirement that must be followed."
    },
    {
        "question": "What are the three components of the fire triangle?",
        "options": ["A. Heat, Spark, and Fuel", "B. Oxygen, Nitrogen, and Fuel", "C. Heat, Oxygen, and Fuel", "D. Flame, Fire, and Heat"],
        "correctAnswer": "C. Heat, Oxygen, and Fuel",
        "explanation": "The fire triangle illustrates the three essential components needed for combustion: heat (ignition source), oxygen, and a fuel source (like grease)."
    },
    // OSHA Standards
    {
        "question": "When using a portable extension ladder to access a roof, how far must the ladder side rails extend above the upper landing surface?",
        "options": ["A. 1 foot", "B. 2 feet", "C. 3 feet", "D. 4 feet"],
        "correctAnswer": "C. 3 feet",
        "explanation": "OSHA requires that when a portable ladder is used for access, its side rails must extend at least 3 feet above the upper landing surface to provide a secure handhold."
    },
    {
        "question": "When is a ladder required to be inspected?",
        "options": ["A. Once a year by a certified inspector.", "B. Before the first use on a new job site.", "C. Periodically and after any event that could affect its safety, like being dropped.", "D. Only when a visible defect like a bent rung is noticed."],
        "correctAnswer": "C. Periodically and after any event that could affect its safety, like being dropped.",
        "explanation": "OSHA requires ladders to be inspected for visible defects periodically and always after any occurrence which could affect their safe use."
    },
    {
        "question": "Who is responsible for removing a lockout or tagout device from an energy-isolating switch?",
        "options": ["A. The building manager or owner.", "B. Any member of the cleaning crew.", "C. The supervisor of the shift.", "D. The specific employee who applied the device."],
        "correctAnswer": "D. The specific employee who applied the device.",
        "explanation": "With very limited exceptions, OSHA mandates that each lockout or tagout device must be removed by the employee who applied it."
    },
    {
        "question": "Before starting work on a machine that has been locked out, what must the authorized employee do?",
        "options": ["A. Ask a coworker if the power is off.", "B. Verify that the isolation and de-energization have actually occurred.", "C. Check that the key is in the lock.", "D. Notify the restaurant manager that work is beginning."],
        "correctAnswer": "B. Verify that the isolation and de-energization have actually occurred.",
        "explanation": "Prior to starting work, the authorized employee must verify that the machine has been properly de-energized, for instance by attempting to activate the normal operating controls."
    },
    {
        "question": "Which of the following is the best example of Personal Protective Equipment (PPE)?",
        "options": ["A. A pressure washer.", "B. A fire extinguisher.", "C. A respirator.", "D. Plastic sheeting."],
        "correctAnswer": "C. A respirator.",
        "explanation": "A respirator is an example of PPE, which is equipment worn to minimize exposure to hazards. Other examples include gloves, goggles, and steel-toed boots."
    },
    {
        "question": "What is the minimum recommended eye protection when working with caustic chemical degreasers?",
        "options": ["A. Prescription eyeglasses.", "B. Sunglasses with UV protection.", "C. Safety glasses with side shields.", "D. Splash-proof safety goggles."],
        "correctAnswer": "D. Splash-proof safety goggles.",
        "explanation": "Due to the high risk of chemical splashes that can cause severe eye damage, splash-proof safety goggles are required when working with caustic degreasers."
    },
    {
        "question": "When must an employee receive training on the hazards of the chemicals they will be using?",
        "options": ["A. Within the first week of employment.", "B. Before they begin working with the chemicals.", "C. Annually during a safety meeting.", "D. Only if they request the training."],
        "correctAnswer": "B. Before they begin working with the chemicals.",
        "explanation": "OSHA's Hazard Communication Standard requires that employees must be trained on the hazards of chemicals before they are exposed to them in the workplace."
    },
    {
        "question": "How often must an employee be fit-tested for the specific make and model of respirator they use?",
        "options": ["A. Only once when they are first hired.", "B. Every five years.", "C. At least annually.", "D. Only after a significant weight change."],
        "correctAnswer": "C. At least annually.",
        "explanation": "OSHA requires that an employee be fit-tested for their specific tight-fitting respirator at least annually to ensure a proper seal."
    },
    {
        "question": "What is the OSHA definition of a 'confined space'?",
        "options": ["A. Any small room within a building.", "B. An area below ground level, like a basement.", "C. An area with limited entry/exit that is not designed for continuous occupancy.", "D. Any workspace that requires a ladder for access."],
        "correctAnswer": "C. An area with limited entry/exit that is not designed for continuous occupancy.",
        "explanation": "A confined space is defined by OSHA as having limited means of entry or exit and not being designed for continuous human occupancy; many duct systems meet this definition."
    },
    {
        "question": "When entry into a permit-required confined space is authorized, what must be provided just outside the space for the entire duration of the entry?",
        "options": ["A. A second ladder.", "B. A fire extinguisher.", "C. An attendant (safety watch).", "D. A copy of the company's insurance policy."],
        "correctAnswer": "C. An attendant (safety watch).",
        "explanation": "For any permit-required confined space entry, at least one attendant (or safety watch) must be posted outside to monitor the entrant and summon help if needed."
    },
    {
        "question": "What is the correct procedure for lifting a heavy object like a pressure washer?",
        "options": ["A. Keep your legs straight and bend at the waist.", "B. Lift with your back, using a slow and steady motion.", "C. Bend at your knees and lift with your legs, keeping your back straight.", "D. Hold the object away from your body to maintain balance."],
        "correctAnswer": "C. Bend at your knees and lift with your legs, keeping your back straight.",
        "explanation": "To prevent back injuries, which are common, you should always lift heavy objects by bending your knees and using the power of your legs, keeping your back straight."
    },
    // Acronyms
    {
        "question": "What does the acronym IKECA stand for?",
        "options": ["A. International Kitchen Equipment Cleaning Administration", "B. Institute of Kitchen Exhaust Compliance and Assessment", "C. International Kitchen Exhaust Cleaning Association", "D. Internal Kitchen Exhaust Cleaners of America"],
        "correctAnswer": "C. International Kitchen Exhaust Cleaning Association",
        "explanation": "IKECA is the International Kitchen Exhaust Cleaning Association, the organization that provides the PECT designation and sets industry standards."
    },
    {
        "question": "What does the acronym OSHA stand for?",
        "options": ["A. Occupational Safety and Hazard Administration", "B. Organization for Safe and Healthy Accommodations", "C. Occupational Safety and Health Administration", "D. Official Safety and Health Authority"],
        "correctAnswer": "C. Occupational Safety and Health Administration",
        "explanation": "OSHA is the Occupational Safety and Health Administration, the U.S. government agency responsible for setting and enforcing workplace safety standards."
    },
    {
        "question": "The acronym AHJ stands for Authority Having Jurisdiction. What is the role of the AHJ?",
        "options": ["A. To manage the restaurant's daily operations.", "B. To represent the cleaning company in legal matters.", "C. An individual or organization, like a fire marshal, responsible for enforcing codes.", "D. The lead technician who has final authority on the job site."],
        "correctAnswer": "C. An individual or organization, like a fire marshal, responsible for enforcing codes.",
        "explanation": "The AHJ is the entity, most often the local fire marshal, responsible for interpreting and enforcing code compliance for fire and life safety."
    },
    {
        "question": "What does the acronym EPA stand for, and why is it relevant to exhaust cleaners?",
        "options": ["A. Exhaust Performance Agency; it sets standards for fan efficiency.", "B. Environmental Protection Agency; it regulates the proper disposal of wastewater and hazardous materials.", "C. Emergency Protocol Administration; it outlines steps to take during a fire.", "D. Equipment Protection Agency; it certifies cleaning chemicals."],
        "correctAnswer": "B. Environmental Protection Agency; it regulates the proper disposal of wastewater and hazardous materials.",
        "explanation": "The EPA, or Environmental Protection Agency, has regulations (like the Clean Water Act) that govern the proper disposal of wastewater and chemicals used during cleaning."
    },
    {
        "question": "We primarily clean which type of kitchen hood?",
        "options": ["A. Type I", "B. Type II", "C. Type III", "D. Residential"],
        "correctAnswer": "A. Type I",
        "explanation": "Technicians primarily clean Type I hoods, which are designed to handle grease-laden vapors from commercial cooking, as opposed to Type II hoods which handle heat and moisture only."
    },
    {
        "question": "After a cleaning is complete and before leaving the site, what is a final critical step a technician must perform?",
        "options": ["A. Inform the chef that the job is done.", "B. Ensure the exhaust fan is running and all components are returned to an operable state.", "C. Leave the invoice on the counter.", "D. Stack all used tools neatly in the kitchen."],
        "correctAnswer": "B. Ensure the exhaust fan is running and all components are returned to an operable state.",
        "explanation": "Upon completion, the technician must ensure all electrical switches and system components, including the fan, are returned to a safe and operable state."
    },
    {
        "question": "According to NFPA 96, how should a hood be sized relative to the appliances it covers?",
        "options": ["A. It must be exactly flush with the edges of the appliances.", "B. It must extend a minimum of 18 inches beyond all appliances.", "C. It must be adequately sized to capture all grease-laden vapors.", "D. It must be at least twice the width of the largest appliance."],
        "correctAnswer": "C. It must be adequately sized to capture all grease-laden vapors.",
        "explanation": "While specific overhangs are often required by local codes, the primary NFPA 96 requirement is that the hood shall be sized to effectively capture the grease-laden vapors from the cooking appliances below."
    },
    {
        "question": "What is the minimum required thickness for a grease duct constructed from stainless steel?",
        "options": ["A. 20 MSG", "B. 18 MSG", "C. 16 MSG", "D. 14 MSG"],
        "correctAnswer": "B. 18 MSG",
        "explanation": "To provide adequate fire resistance and structural integrity, grease ducts made of stainless steel shall be at least 18 MSG (Manufacturer's Standard Gage) in thickness."
    },
    {
        "question": "For vertical ductwork where personnel entry is not possible, what is the maximum distance allowed between access openings?",
        "options": ["A. On every other floor.", "B. Every 20 feet.", "C. Every 12 feet and at every change of direction.", "D. Only at the top and bottom of the run."],
        "correctAnswer": "C. Every 12 feet and at every change of direction.",
        "explanation": "On vertical ductwork where personnel entry isn't possible, access must be provided on every floor, with openings no more than 12 feet apart, to ensure the entire duct can be reached for cleaning."
    },
    {
        "question": "If a horizontal duct run is too small for a personnel entry-sized opening, what is the alternative requirement for access?",
        "options": ["A. The duct must be replaced with a larger one.", "B. Openings large enough for cleaning must be installed every 12 feet.", "C. Steam cleaning must be used exclusively.", "D. The cleaning company is not responsible for cleaning that section."],
        "correctAnswer": "B. Openings large enough for cleaning must be installed every 12 feet.",
        "explanation": "When a duct is too small for personnel entry, NFPA 96 requires that openings large enough to permit thorough cleaning must be installed at a maximum distance of every 12 feet."
    },
    {
        "question": "When must the main exhaust fan be in operation?",
        "options": ["A. Only during peak cooking hours.", "B. At all times the building is occupied.", "C. Whenever the cooking equipment under the hood is turned on.", "D. During the cleaning process to vent chemical fumes."],
        "correctAnswer": "C. Whenever the cooking equipment under the hood is turned on.",
        "explanation": "NFPA 96 stipulates that exhaust fans shall operate whenever the cooking equipment is turned on to ensure grease-laden vapors are properly ventilated."
    },
    {
        "question": "If an access panel is installed or removed for service, where should the service company place a label indicating this?",
        "options": ["A. On the surface of the access panel itself or near the opening.", "B. Inside the ductwork next to the opening.", "C. On the main electrical panel for the fan.", "D. On the front of the kitchen hood."],
        "correctAnswer": "A. On the surface of the access panel itself or near the opening.",
        "explanation": "A service company label must be affixed on or near each access panel that has been opened or installed to provide a record of service."
    },
    {
        "question": "What type of gasket material is required for access panels?",
        "options": ["A. Airtight and rated for 500°F.", "B. Watertight and rated for 1000°F.", "C. Greasetight and rated for 1500°F.", "D. Flexible silicone rated for 1200°F."],
        "correctAnswer": "C. Greasetight and rated for 1500°F.",
        "explanation": "To maintain the integrity of the duct during a fire, access panel gaskets must be both greasetight and rated for 1500°F."
    },
    {
        "question": "What should a technician do if they discover components of the fire suppression system are inoperable?",
        "options": ["A. Attempt to repair the components themselves.", "B. Proceed with the cleaning and note the issue on the report.", "C. Immediately disable the cooking appliances and notify the owner.", "D. Cover the components to protect them from water during cleaning."],
        "correctAnswer": "C. Immediately disable the cooking appliances and notify the owner.",
        "explanation": "While cleaners shall not render a system inoperable, discovering an already inoperable system is a major life safety hazard that requires immediate notification to the owner and shutdown of the cooking line."
    },
    {
        "question": "In the context of NFPA 96, what does the word 'should' signify?",
        "options": ["A. A mandatory and absolute requirement.", "B. A recommendation that is advised but not required.", "C. A requirement that can be ignored.", "D. A strict prohibition."],
        "correctAnswer": "B. A recommendation that is advised but not required.",
        "explanation": "Unlike the word 'shall', the word 'should' indicates a recommendation or something that is advised as a best practice but is not mandatory."
    },
    {
        "question": "What is the proper technique for a technician climbing or descending a ladder?",
        "options": ["A. Use one hand to carry tools and the other to hold on.", "B. Face away from the ladder to get a better view of the surroundings.", "C. Maintain three points of contact with the ladder at all times.", "D. Skip rungs to ascend or descend faster."],
        "correctAnswer": "C. Maintain three points of contact with the ladder at all times.",
        "explanation": "To ensure stability and prevent falls, OSHA requires users to face the ladder and maintain three points of contact (two feet and one hand, or one foot and two hands) when climbing."
    },
    {
        "question": "If a tag cannot be affixed directly to the energy isolating device, where must it be placed?",
        "options": ["A. On the supervisor's desk.", "B. In the work van.", "C. As close as safely possible to the device where it will be obvious to anyone trying to operate it.", "D. On the main entrance door to the building."],
        "correctAnswer": "C. As close as safely possible to the device where it will be obvious to anyone trying to operate it.",
        "explanation": "When a lockout/tagout tag cannot be directly attached, it must be placed in a position that will be immediately obvious to anyone attempting to operate the device."
    },
    {
        "question": "An employee requests a Safety Data Sheet (SDS) for a chemical they are using. How quickly must the employer provide access to it?",
        "options": ["A. Within 5 business days.", "B. By the end of the next pay period.", "C. Within the same work shift.", "D. Within 24 hours."],
        "correctAnswer": "C. Within the same work shift.",
        "explanation": "OSHA's Hazard Communication standard requires that employees have access to a Safety Data Sheet for the chemicals they work with within their same work shift upon request."
    },
    {
        "question": "When is 'entry' into a confined space considered to have officially occurred?",
        "options": ["A. Once the employee's entire body is inside the space.", "B. As soon as any part of the entrant's body breaks the plane of the opening.", "C. After the employee has been inside the space for at least one minute.", "D. Once the entry permit has been signed."],
        "correctAnswer": "B. As soon as any part of the entrant's body breaks the plane of the opening.",
        "explanation": "OSHA defines entry into a confined space as occurring as soon as any part of the entrant's body breaks the plane of the opening into that space."
    },
    {
        "question": "When is hearing protection, such as earplugs or earmuffs, recommended?",
        "options": ["A. For the entire duration of every cleaning job.", "B. Only when working inside a loud kitchen.", "C. When working around loud equipment like pressure washers and exhaust fans.", "D. Only if you have pre-existing hearing damage."],
        "correctAnswer": "C. When working around loud equipment like pressure washers and exhaust fans.",
        "explanation": "You should protect your hearing by wearing appropriate ear protection when exposed to high noise levels from equipment like power washers to prevent long-term hearing loss."
    },
    {
        "question": "For a lockout/tagout device to be 'identifiable' according to OSHA, what does it require?",
        "options": ["A. It must be a bright, fluorescent color.", "B. It must have the phone number of the cleaning company.", "C. It must include the name of the employee who applied the device.", "D. It must be stamped with the date of the service."],
        "correctAnswer": "C. It must include the name of the employee who applied the device.",
        "explanation": "Lockout devices must be identifiable, meaning they must indicate the name of the employee who applied the device."
    },
    {
        "question": "During a cleaning, you accidentally damage the fire-resistant enclosure surrounding a section of ductwork. What is the correct action to take?",
        "options": ["A. Report the damage to the restaurant owner and leave the repair to them.", "B. Cover the damaged area with plastic sheeting.", "C. Repair and restore the enclosure to meet its original intended listing and fire rating.", "D. Contact the original installer of the enclosure to perform the repair."],
        "correctAnswer": "C. Repair and restore the enclosure to meet its original intended listing and fire rating.",
        "explanation": "NFPA 96 states that if the covering or enclosure of a duct is damaged, you shall repair and restore it to meet its intended listing."
    },
    {
        "question": "How often must fusible links of the metal alloy type be replaced?",
        "options": ["A. Monthly", "B. Every 6 months (Semi-annually)", "C. Annually", "D. Only when they appear corroded"],
        "correctAnswer": "B. Every 6 months (Semi-annually)",
        "explanation": "To ensure reliability, metal alloy fusible links must be replaced at least semi-annually. Non-metal alloy links must be replaced annually."
    },
    {
        "question": "A 'listed' hood assembly must be installed in accordance with what?",
        "options": ["A. The local fire code only", "B. The recommendations of the AHJ", "C. The terms of its listing and the manufacturer's instructions", "D. The NFPA 96 standard exclusively"],
        "correctAnswer": "C. The terms of its listing and the manufacturer's instructions",
        "explanation": "When an item is 'listed' by a testing agency, it must be installed and used strictly according to the terms of that listing and the manufacturer's provided instructions."
    },
    {
        "question": "Downdraft appliance ventilation systems must have an interlock to ensure that cooking cannot happen unless what condition is met?",
        "options": ["A. The grease reservoir has been emptied", "B. The fire suppression system is armed", "C. The exhaust fan and the supply fan are activated", "D. The adjacent cooking appliances are turned off"],
        "correctAnswer": "C. The exhaust fan and the supply fan are activated",
        "explanation": "To ensure proper capture of effluent, downdraft systems must be interlocked so that the cooking appliance cannot operate unless the exhaust and make-up air fans are running."
    },
    {
        "question": "A rooftop termination outlet must have a minimum horizontal clearance of what distance from an adjacent building or air intake?",
        "options": ["A. 3 feet", "B. 5 feet", "C. 10 feet", "D. 15 feet"],
        "correctAnswer": "C. 10 feet",
        "explanation": "To prevent grease-laden exhaust from entering a building's HVAC system, the exhaust outlet must terminate at least 10 feet away horizontally from any air intakes."
    },
    {
        "question": "What is a primary responsibility an employer has regarding hazardous chemicals in the workplace under OSHA's HazCom standard?",
        "options": ["A. Identify and create an inventory of all hazardous chemicals", "B. Only use non-toxic, biodegradable chemicals", "C. Ensure all chemicals are stored in a single locked cabinet", "D. Provide annual reports to the EPA"],
        "correctAnswer": "A. Identify and create an inventory of all hazardous chemicals",
        "explanation": "A key part of the Hazard Communication program is for the employer to create and maintain a list of all hazardous chemicals known to be present in the workplace."
    },
    {
        "question": "What does the term 'Competent Person' mean in an OSHA context?",
        "options": ["A. Anyone with basic safety training.", "B. Someone capable of identifying hazards and authorized to take corrective action.", "C. A person certified in first aid and CPR.", "D. An individual who has completed an OSHA 10-hour course."],
        "correctAnswer": "B. Someone capable of identifying hazards and authorized to take corrective action.",
        "explanation": "An OSHA 'Competent Person' is specifically defined as one who can identify existing and predictable hazards and who has the authority to take prompt corrective measures to eliminate them."
    },
    {
        "question": "What type of filter is explicitly prohibited for use in commercial kitchen hoods unless it is part of a larger listed device?",
        "options": ["A. Baffle filters", "B. Cartridge filters", "C. Mesh filters", "D. Activated carbon filters"],
        "correctAnswer": "C. Mesh filters",
        "explanation": "Mesh filters are prohibited because they are difficult to clean thoroughly and can become easily clogged, presenting a significant fire hazard."
    },
    {
        "question": "Metal containers used for collecting grease drippings from the system must be inspected or emptied at what minimum frequency?",
        "options": ["A. Daily", "B. Every 3 days", "C. At least weekly", "D. At least monthly"],
        "correctAnswer": "C. At least weekly",
        "explanation": "To prevent overflow and fire hazards, any containers used to collect grease drippings must be checked and emptied on at least a weekly basis."
    },
    {
        "question": "An adhesive label attached to the hood after a cleaning must remain affixed until what time?",
        "options": ["A. The end of the calendar year", "B. The report is filed with the AHJ", "C. The next inspection or cleaning event", "D. 30 days after the service date"],
        "correctAnswer": "C. The next inspection or cleaning event",
        "explanation": "The service label provides a visible record of the last cleaning and must remain in place until the next service is performed, at which point it is replaced."
    },
    {
        "question": "What must be done with grease removal devices (filters) that are found to be broken or have missing components?",
        "options": ["A. They must be cleaned and reinstalled.", "B. They must be documented in the cleaning report.", "C. They can be repaired on-site with equivalent parts.", "D. They shall be replaced."],
        "correctAnswer": "D. They shall be replaced.",
        "explanation": "A broken or incomplete grease filter cannot function as designed. NFPA 96 mandates that such filters shall be replaced with new, functional ones."
    },
    {
        "question": "A sign must be placed on all access panels. What must this sign say?",
        "options": ["A. CAUTION: HOT SURFACE", "B. RESTRICTED ACCESS", "C. ACCESS PANEL - DO NOT OBSTRUCT", "D. AUTHORIZED PERSONNEL ONLY"],
        "correctAnswer": "C. ACCESS PANEL - DO NOT OBSTRUCT",
        "explanation": "To ensure access panels are always reachable for inspection and cleaning, they must be marked with a sign that reads 'ACCESS PANEL - DO NOT OBSTRUCT'."
    },
    {
        "question": "What is the minimum vertical distance required between the lower edge of a grease filter and the cooking surface of a solid fuel charbroiler?",
        "options": ["A. 1.5 feet", "B. 2 feet", "C. 3 feet", "D. 4 feet"],
        "correctAnswer": "D. 4 feet",
        "explanation": "Due to the high heat and flare-up potential of solid fuel cooking, a minimum vertical clearance of 4 feet is required between the cooking surface and the filters to prevent a fire."
    },
    {
        "question": "What is the primary function of a spark arrester in a solid fuel exhaust system?",
        "options": ["A. To enhance airflow for better combustion", "B. To capture airborne grease particles", "C. To minimize the passage of airborne sparks and embers into the ductwork", "D. To reduce noise from the exhaust fan"],
        "correctAnswer": "C. To minimize the passage of airborne sparks and embers into the ductwork",
        "explanation": "A spark arrester is a critical safety component in solid fuel systems designed to stop sparks and embers from entering the duct and potentially igniting creosote deposits."
    },
    {
        "question": "What is the minimum required space between a deep fat fryer and surface flames from adjacent cooking equipment?",
        "options": ["A. 12 inches", "B. 16 inches", "C. 24 inches", "D. 36 inches"],
        "correctAnswer": "B. 16 inches",
        "explanation": "To prevent grease splatter from the fryer being ignited by an open flame, a minimum separation of 16 inches is required by NFPA 96."
    },
    {
        "question": "According to OSHA, at what minimum height from a lower level are personal fall arrest systems generally required when working on a roof?",
        "options": ["A. 4 feet", "B. 6 feet", "C. 10 feet", "D. Only when the roof pitch is steep"],
        "correctAnswer": "B. 6 feet",
        "explanation": "OSHA's general industry standard requires fall protection for any worker exposed to a fall of 6 feet or more to a lower level."
    },
    {
        "question": "What should a technician do if they discover components of the fire suppression system are inoperable?",
        "options": ["A. Attempt to repair the components themselves.", "B. Proceed with the cleaning and note the issue on the report.", "C. Immediately disable the cooking appliances and notify the owner.", "D. Cover the components to protect them from water during cleaning."],
        "correctAnswer": "C. Immediately disable the cooking appliances and notify the owner.",
        "explanation": "While fire suppression components shall not be rendered inoperable by the cleaning crew, if they are found to be inoperable, it is a life safety hazard that requires immediate notification and shutdown of the cooking line."
    },
    {
        "question": "What is the proper procedure for handling fusible links during a cleaning?",
        "options": ["A. Spray them directly with degreaser to clean them.", "B. Remove them before cleaning and reinstall them after.", "C. Cover and protect them from chemicals and pressure washing.", "D. Test their function by applying heat."],
        "correctAnswer": "C. Cover and protect them from chemicals and pressure washing.",
        "explanation": "Fusible links should be protected from chemicals and cleaning activities that could damage them or cause premature activation; spraying them directly is wrong."
    },
    {
        "question": "Where should wastewater containing grease and cleaning chemicals be disposed of?",
        "options": ["A. Into the nearest storm drain.", "B. Into a mop sink or sanitary drain as allowed by the AHJ.", "C. Poured onto the gravel area behind the restaurant.", "D. Down the toilet."],
        "correctAnswer": "B. Into a mop sink or sanitary drain as allowed by the AHJ.",
        "explanation": "Waste should be disposed of in the manner prescribed by the Authority Having Jurisdiction (AHJ), which is typically a sanitary drain."
    },
    {
        "question": "In the context of NFPA 96, what does the word 'shall' signify?",
        "options": ["A. A recommendation that is advised but not required.", "B. A suggestion for best practice.", "C. A mandatory and absolute requirement.", "D. An action left to the technician's discretion."],
        "correctAnswer": "C. A mandatory and absolute requirement.",
        "explanation": "NFPA 96 states that the word 'shall' indicates a mandatory requirement."
    },
    {
        "question": "In the context of NFPA 96, what does the word 'should' signify?",
        "options": ["A. A mandatory and absolute requirement.", "B. A recommendation that is advised but not required.", "C. A requirement that can be ignored.", "D. A strict prohibition."],
        "correctAnswer": "B. A recommendation that is advised but not required.",
        "explanation": "The word 'should' indicates a recommendation or that which is advised but not required."
    },
    {
        "question": "Who is defined as the 'Authority Having Jurisdiction' (AHJ)?",
        "options": ["A. The owner of the restaurant.", "B. The cleaning company's supervisor.", "C. An organization, office, or individual responsible for approving equipment and installations, like a fire marshal.", "D. The lead technician on the cleaning crew."],
        "correctAnswer": "C. An organization, office, or individual responsible for approving equipment and installations, like a fire marshal.",
        "explanation": "The AHJ is the entity responsible for enforcing code requirements, most often the local fire marshal."
    },
    {
        "question": "What are the three components of the fire triangle?",
        "options": ["A. Heat, Spark, and Fuel", "B. Oxygen, Nitrogen, and Fuel", "C. Heat, Oxygen, and Fuel", "D. Flame, Fire, and Heat"],
        "correctAnswer": "C. Heat, Oxygen, and Fuel",
        "explanation": "The fire triangle consists of heat, oxygen, and a fuel source."
    },
    {
        "question": "What does the acronym IKECA stand for?",
        "options": ["A. International Kitchen Equipment Cleaning Administration", "B. Institute of Kitchen Exhaust Compliance and Assessment", "C. International Kitchen Exhaust Cleaning Association", "D. Internal Kitchen Exhaust Cleaners of America"],
        "correctAnswer": "C. International Kitchen Exhaust Cleaning Association",
        "explanation": "IKECA stands for the International Kitchen Exhaust Cleaning Association, the organization that provides the PECT designation."
    },
    {
        "question": "What does the acronym OSHA stand for?",
        "options": ["A. Occupational Safety and Hazard Administration", "B. Organization for Safe and Healthy Accommodations", "C. Occupational Safety and Health Administration", "D. Official Safety and Health Authority"],
        "correctAnswer": "C. Occupational Safety and Health Administration",
        "explanation": "OSHA stands for the Occupational Safety and Health Administration, which sets and enforces workplace safety standards."
    },
    {
        "question": "What does the acronym EPA stand for, and why is it relevant to exhaust cleaners?",
        "options": ["A. Exhaust Performance Agency; it sets standards for fan efficiency.", "B. Environmental Protection Agency; it regulates the proper disposal of wastewater and hazardous materials.", "C. Emergency Protocol Administration; it outlines steps to take during a fire.", "D. Equipment Protection Agency; it certifies cleaning chemicals."],
        "correctAnswer": "B. Environmental Protection Agency; it regulates the proper disposal of wastewater and hazardous materials.",
        "explanation": "The EPA, or Environmental Protection Agency, has regulations that govern the disposal of wastewater and chemicals used during the cleaning process."
    },
    {
        "question": "What does the acronym PPE stand for?",
        "options": ["A. Professional Performance Equipment", "B. Pressure Protection Equipment", "C. Personal Protective Equipment", "D. Primary Protective Equipment"],
        "correctAnswer": "C. Personal Protective Equipment",
        "explanation": "PPE stands for Personal Protective Equipment, which includes items like gloves, goggles, and respirators worn for safety."
    },
    {
        "question": "In the context of Hazard Communication, what does SDS stand for?",
        "options": ["A. Standard Dilution Specifications", "B. Safety Data Sheet", "C. System Danger Sheet", "D. Service and Dilution Sheet"],
        "correctAnswer": "B. Safety Data Sheet",
        "explanation": "SDS stands for Safety Data Sheet, a document that provides comprehensive information about a hazardous chemical."
    }
    {
        "question": "What shall technicians do to prepare the kitchen appiances before cleaning?",
        "options": ["A. Move them out of the way", "B. Clean them off", "C. Wrap the hood with sheeting, plastic, or tarps", "D. Check their surface temperature"],
        "correctAnswer": "C. Wrap the hood with sheeting, plastic, or tarps",
        "explanation": "Cleaning that involves spraying requires the wrapping of hoods."
    }
    {
        "question": "During cleaning, what should technicians do to the fire suppression system?",
        "options": ["A. Disable the system to prevent it from accidentally discharging", "B. Wrap it in plastic", "C. Technicians should not render the fire suppression system inoperable", "D. Clean every component of it"],
        "correctAnswer": "C. Technicians should not render the fire suppression system inoperable",
        "explanation": "Only qualified fire suppression technicians may render fire suppression systems inoperable."
    }
    {
        "question": "According to NFPA 96, what parts of the kitchen exhaust system shall be inspected or cleaned?",
        "options": ["A. Hoods, filters, and fans", "B. The entire kitchen exhaust system", "C. The parts of the system that are easy to reach", "D. Grease removal devices such as filters"],
        "correctAnswer": "B. The entire kitchen exhaust system",
        "explanation": "NFPA 96 requires that the entire kitchen exhaust system be inspected or cleaned."
    }
    {
        "question": "What is the primary purpose of a kitchen exhaust hood?",
        "options": ["A. To capture grease vapors and gases", "B. To make kitchen staff comfortable", "C. To recycle heated air", "D. To comply with clean air standards"],
        "correctAnswer": "A. To capture grease vapors and gases",
        "explanation": "Kitchen exhaust hoods serve the primary purpose of capturing the grease laden vapors and gases produced by cooking."
    }
];

const QUIZ_LENGTH = 50; // Set how many questions per quiz session
let quizQuestions = [];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const feedbackEl = document.getElementById('feedback');
const explanationEl = document.getElementById('explanation');
const quizContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const scoreSpan = document.getElementById('score');
const totalQuestionsSpan = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');
const percentageScoreSpan = document.getElementById('percentage-score');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    const shuffledQuestions = [...questions];
    shuffleArray(shuffledQuestions);
    quizQuestions = shuffledQuestions.slice(0, QUIZ_LENGTH);
    
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'flex';
    
    loadQuestion();
}

function loadQuestion() {
    selectedAnswer = null;
    feedbackEl.textContent = '';
    feedbackEl.className = '';
    explanationEl.style.display = 'none';
    submitBtn.disabled = true;

    updateProgressBar();

    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionEl.textContent = currentQuestion.question;
        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectOption(button, option));
            optionsContainer.appendChild(button);
        });
    } else {
        showResults();
    }
}

function updateProgressBar() {
    const progressPercentage = Math.round((currentQuestionIndex / quizQuestions.length) * 100);
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.textContent = `${progressPercentage}%`;
    }
}

function selectOption(button, option) {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    selectedAnswer = option;
    submitBtn.disabled = false;
}

function submitAnswer() {
    if (selectedAnswer === null) return;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');
    
    optionButtons.forEach(btn => btn.disabled = true);
    submitBtn.disabled = true;

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        feedbackEl.textContent = "Correct!";
        feedbackEl.classList.add('correct-feedback');
    } else {
        feedbackEl.textContent = `Incorrect.`;
        feedbackEl.classList.add('incorrect-feedback');
    }

    optionButtons.forEach(btn => {
        if (btn.textContent === currentQuestion.correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedAnswer) {
            btn.classList.add('incorrect');
        }
    });

    explanationEl.innerHTML = `<strong>Explanation:</strong> ${currentQuestion.explanation}`;
    explanationEl.style.display = 'block';

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 4000); // 4-second delay
}

function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    if (progressBar) {
        progressBar.style.width = '100%';
        progressBar.textContent = '100%';
    }

    scoreSpan.textContent = score;
    totalQuestionsSpan.textContent = quizQuestions.length;

    const percentage = Math.round((score / quizQuestions.length) * 100);
    percentageScoreSpan.textContent = percentage;
}

submitBtn.addEventListener('click', submitAnswer);
restartBtn.addEventListener('click', startQuiz);

startQuiz();
