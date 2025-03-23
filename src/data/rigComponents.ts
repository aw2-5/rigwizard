
export interface RigComponent {
  id: number;
  name: string;
  description: string;
  position: {
    x: number;
    y: number;
  };
  category: 'Hoisting' | 'Drilling' | 'Power' | 'Fluid' | 'Safety' | 'Housing' | 'Storage' | 'Other';
  related: number[];
}

export const rigComponents: RigComponent[] = [
  {
    id: 1,
    name: "Crown Block and Water Table",
    description: "Located at the top of the derrick, the crown block is a set of pulleys through which the drilling line is threaded. The water table is a water-cooled bearing assembly at the crown of the derrick.",
    position: { x: 50, y: 10 },
    category: "Hoisting",
    related: [3, 5, 7, 41]
  },
  {
    id: 2,
    name: "Catline Boom and Hoist Line",
    description: "An extension arm and line used for lifting and moving equipment around the rig floor.",
    position: { x: 30, y: 20 },
    category: "Hoisting",
    related: [1, 3, 7]
  },
  {
    id: 3,
    name: "Drilling Line",
    description: "A wire rope used in the rig's pulley system to raise and lower the traveling block and hook.",
    position: { x: 45, y: 30 },
    category: "Hoisting",
    related: [1, 5, 7, 41, 42]
  },
  {
    id: 4,
    name: "Monkeyboard",
    description: "A platform on the derrick where a worker (derrickman) stands to handle the upper portion of the drill pipe as it's run in or out of the wellbore.",
    position: { x: 45, y: 25 },
    category: "Drilling",
    related: [7, 8]
  },
  {
    id: 5,
    name: "Traveling Block",
    description: "A set of pulleys that moves up and down the derrick, connected to the drilling line.",
    position: { x: 50, y: 35 },
    category: "Hoisting",
    related: [1, 3, 6, 41, 42, 58]
  },
  {
    id: 6,
    name: "Top Drive",
    description: "A modern alternative to the rotary table and kelly system, directly rotating the drill string from the top while allowing for pipe movement up and down.",
    position: { x: 50, y: 40 },
    category: "Drilling",
    related: [5, 8, 37, 42, 51]
  },
  {
    id: 7,
    name: "Mast",
    description: "The tall structure that supports the crown block and drilling equipment, providing height for raising and lowering the drill string.",
    position: { x: 50, y: 20 },
    category: "Hoisting",
    related: [1, 4, 5, 57]
  },
  {
    id: 8,
    name: "Drill Pipe",
    description: "Steel pipe sections connected together to form the drill string, which transmits drilling fluid and rotation to the drill bit.",
    position: { x: 50, y: 60 },
    category: "Drilling",
    related: [6, 37, 38, 50]
  },
  {
    id: 9,
    name: "Doghouse",
    description: "A small enclosure on the rig floor that serves as an office for the driller and as a storage place for tools.",
    position: { x: 20, y: 50 },
    category: "Housing",
    related: [39, 54, 60]
  },
  {
    id: 10,
    name: "Blowout Preventer",
    description: "A large specialized valve used to seal, control, and monitor oil and gas wells to prevent uncontrolled release of formation fluids.",
    position: { x: 50, y: 80 },
    category: "Safety",
    related: [22, 25, 28, 48]
  },
  {
    id: 11,
    name: "Water Tank",
    description: "Stores water used for various purposes on the rig, including mixing drilling fluids.",
    position: { x: 80, y: 70 },
    category: "Storage",
    related: [16, 17, 18]
  },
  {
    id: 12,
    name: "Electric Cable Tray",
    description: "Supports and routes electrical cables that power the rig's equipment.",
    position: { x: 65, y: 55 },
    category: "Power",
    related: [13, 15]
  },
  {
    id: 13,
    name: "Engine Generator Sets",
    description: "Provide electrical power to operate the rig's equipment.",
    position: { x: 85, y: 60 },
    category: "Power",
    related: [12, 14, 15]
  },
  {
    id: 14,
    name: "Fuel Tank",
    description: "Stores diesel fuel for the engines that power the rig.",
    position: { x: 90, y: 65 },
    category: "Storage",
    related: [13]
  },
  {
    id: 15,
    name: "Electrical Control House",
    description: "Houses electrical control systems for the rig's equipment.",
    position: { x: 75, y: 55 },
    category: "Power",
    related: [12, 13, 39]
  },
  {
    id: 16,
    name: "Mud Pumps",
    description: "High-pressure pumps used to circulate drilling fluid down the drill string and back up the annulus.",
    position: { x: 70, y: 65 },
    category: "Fluid",
    related: [17, 18, 47, 50, 55]
  },
  {
    id: 17,
    name: "Bulk Mud Component Tanks",
    description: "Store dry materials used to mix drilling fluid.",
    position: { x: 65, y: 75 },
    category: "Storage",
    related: [16, 18]
  },
  {
    id: 18,
    name: "Mud Tanks (Pits)",
    description: "Hold the drilling fluid (mud) used during drilling operations.",
    position: { x: 60, y: 80 },
    category: "Fluid",
    related: [16, 17, 21, 33, 34, 35, 47]
  },
  {
    id: 19,
    name: "Reserve Pit",
    description: "An excavated area used to store waste fluids and cuttings.",
    position: { x: 75, y: 85 },
    category: "Storage",
    related: [18, 21]
  },
  {
    id: 20,
    name: "Mud-Gas Separator",
    description: "Removes gas from the drilling fluid returning from the wellbore.",
    position: { x: 55, y: 70 },
    category: "Fluid",
    related: [18, 21, 22, 33]
  },
  {
    id: 21,
    name: "Shale Shakers",
    description: "Vibrating screens that remove cuttings from the drilling fluid returning from the wellbore.",
    position: { x: 60, y: 75 },
    category: "Fluid",
    related: [18, 20, 34, 35, 47]
  },
  {
    id: 22,
    name: "Choke Manifold",
    description: "A system of valves used to control pressure when the well is closed in.",
    position: { x: 55, y: 85 },
    category: "Safety",
    related: [10, 20, 48]
  },
  {
    id: 23,
    name: "Pipe Ramp",
    description: "An inclined ramp used to move drill pipe from ground level to the rig floor.",
    position: { x: 30, y: 70 },
    category: "Other",
    related: [8, 24, 30]
  },
  {
    id: 24,
    name: "Pipe Racks",
    description: "Horizontal supports used to store drill pipe, casing, and other tubulars.",
    position: { x: 25, y: 75 },
    category: "Storage",
    related: [8, 23, 30]
  },
  {
    id: 25,
    name: "Accumulator",
    description: "Stores pressurized hydraulic fluid used to operate the blowout preventer.",
    position: { x: 40, y: 80 },
    category: "Safety",
    related: [10, 48]
  },
  {
    id: 26,
    name: "Annulus",
    description: "The space between the drill pipe and the wellbore or casing.",
    position: { x: 52, y: 70 },
    category: "Drilling",
    related: [8, 32, 37, 47, 56]
  },
  {
    id: 27,
    name: "Brake",
    description: "Used to control the movement of the drawworks and traveling block.",
    position: { x: 40, y: 50 },
    category: "Hoisting",
    related: [36, 41]
  },
  {
    id: 28,
    name: "Casing Head",
    description: "A heavy, flanged steel fitting connected to the first string of casing, providing a housing for slips and packing assemblies.",
    position: { x: 50, y: 82 },
    category: "Drilling",
    related: [10, 32, 56]
  },
  {
    id: 29,
    name: "Cathead",
    description: "A spool-shaped attachment on the end of the drawworks shaft used with rope to provide power for lifting or moving equipment.",
    position: { x: 35, y: 50 },
    category: "Hoisting",
    related: [36, 59]
  },
  {
    id: 30,
    name: "Catwalk",
    description: "A walkway from ground level to the rig floor, often used to move drill pipe to the rig floor.",
    position: { x: 25, y: 60 },
    category: "Other",
    related: [23, 24, 54, 60]
  },
  {
    id: 31,
    name: "Cellar",
    description: "A pit in the ground beneath the rig floor that provides room for equipment at the top of the wellbore.",
    position: { x: 50, y: 85 },
    category: "Drilling",
    related: [10, 28, 32]
  },
  {
    id: 32,
    name: "Conductor Pipe",
    description: "The first and largest diameter pipe installed in a well, preventing the hole from caving in and providing a conduit for the return of drilling fluid.",
    position: { x: 50, y: 90 },
    category: "Drilling",
    related: [28, 31, 56]
  },
  {
    id: 33,
    name: "Degasser",
    description: "Removes gas from the drilling fluid.",
    position: { x: 65, y: 70 },
    category: "Fluid",
    related: [18, 20, 21]
  },
  {
    id: 34,
    name: "Desander",
    description: "Removes sand-sized particles from the drilling fluid.",
    position: { x: 65, y: 72 },
    category: "Fluid",
    related: [18, 21, 35]
  },
  {
    id: 35,
    name: "Desilter",
    description: "Removes silt-sized particles from the drilling fluid.",
    position: { x: 65, y: 74 },
    category: "Fluid",
    related: [18, 21, 34]
  },
  {
    id: 36,
    name: "Drawworks",
    description: "The main hoisting machinery that raises and lowers the traveling block and whatever is attached to it.",
    position: { x: 40, y: 45 },
    category: "Hoisting",
    related: [3, 5, 27, 29, 41]
  },
  {
    id: 37,
    name: "Drill Bit",
    description: "The cutting tool attached to the bottom of the drill string that breaks up the rock.",
    position: { x: 50, y: 95 },
    category: "Drilling",
    related: [6, 8, 38]
  },
  {
    id: 38,
    name: "Drill Collars",
    description: "Heavy, thick-walled tubes used near the bottom of the drill string to provide weight on the bit.",
    position: { x: 50, y: 75 },
    category: "Drilling",
    related: [8, 37]
  },
  {
    id: 39,
    name: "Driller's Console",
    description: "The control panel operated by the driller to control various rig functions.",
    position: { x: 30, y: 50 },
    category: "Other",
    related: [9, 15, 36, 61]
  },
  {
    id: 40,
    name: "Elevators",
    description: "A set of clamps that grip a stand of drill pipe, casing, or tubing so it can be raised or lowered into the wellbore.",
    position: { x: 45, y: 55 },
    category: "Hoisting",
    related: [8, 42, 52]
  },
  {
    id: 41,
    name: "Hoisting Line",
    description: "The drilling line that raises and lowers the traveling block.",
    position: { x: 45, y: 35 },
    category: "Hoisting",
    related: [1, 3, 5, 27, 36, 42]
  },
  {
    id: 42,
    name: "Hook",
    description: "A large hook attached to the bottom of the traveling block, used to pick up and hold the swivel, kelly, and drill string.",
    position: { x: 50, y: 45 },
    category: "Hoisting",
    related: [5, 6, 40, 41, 43, 58]
  },
  {
    id: 43,
    name: "Kelly",
    description: "A heavy steel pipe with a square or hexagonal cross-section that transmits rotation from the rotary table to the drill string.",
    position: { x: 50, y: 50 },
    category: "Drilling",
    related: [8, 42, 44, 45, 51, 58]
  },
  {
    id: 44,
    name: "Kelly Bushing",
    description: "A device fitted to the rotary table that transmits rotation to the kelly.",
    position: { x: 50, y: 55 },
    category: "Drilling",
    related: [43, 51]
  },
  {
    id: 45,
    name: "Kelly Spinner",
    description: "A pneumatically operated device used to spin the kelly when making up or breaking out the kelly from the drill string.",
    position: { x: 48, y: 52 },
    category: "Drilling",
    related: [43, 51, 53]
  },
  {
    id: 46,
    name: "Mousehole",
    description: "A shallow boring under the rig floor, lined with casing pipe, into which a joint of drill pipe is placed temporarily for later connection to the drill string.",
    position: { x: 45, y: 60 },
    category: "Drilling",
    related: [8, 49, 51, 52]
  },
  {
    id: 47,
    name: "Mud Return Line",
    description: "A trough or pipe that carries the drilling fluid from the wellbore to the shale shakers and mud tanks.",
    position: { x: 55, y: 75 },
    category: "Fluid",
    related: [16, 18, 21, 26]
  },
  {
    id: 48,
    name: "Ram BOP",
    description: "A type of blowout preventer that uses rams to seal the wellbore.",
    position: { x: 50, y: 81 },
    category: "Safety",
    related: [10, 22, 25]
  },
  {
    id: 49,
    name: "Rathole",
    description: "A hole in the rig floor, lined with casing pipe, into which the kelly and swivel are placed when not in use.",
    position: { x: 55, y: 60 },
    category: "Drilling",
    related: [43, 46, 51, 58]
  },
  {
    id: 50,
    name: "Rotary Hose",
    description: "A high-pressure hose that carries drilling fluid from the mud pumps to the swivel and down the drill string.",
    position: { x: 60, y: 45 },
    category: "Fluid",
    related: [8, 16, 55, 58]
  },
  {
    id: 51,
    name: "Rotary Table",
    description: "A mechanical device on the rig floor that provides rotational power to turn the drill string and bit.",
    position: { x: 50, y: 57 },
    category: "Drilling",
    related: [6, 43, 44, 45, 46, 49, 52]
  },
  {
    id: 52,
    name: "Slips",
    description: "Wedge-shaped pieces of metal with teeth that grip the drill pipe to prevent it from falling into the wellbore when it is not attached to the kelly.",
    position: { x: 52, y: 58 },
    category: "Drilling",
    related: [8, 40, 46, 51]
  },
  {
    id: 53,
    name: "Spinning chain",
    description: "A chain attached to the tongs and the cathead, used to spin the drill pipe when making up or breaking out connections.",
    position: { x: 40, y: 55 },
    category: "Drilling",
    related: [29, 45, 59]
  },
  {
    id: 54,
    name: "Stairways",
    description: "Provide access to different levels of the rig.",
    position: { x: 35, y: 60 },
    category: "Other",
    related: [9, 30, 60]
  },
  {
    id: 55,
    name: "Standpipe",
    description: "A vertical pipe mounted on one leg of the derrick that connects the mud pumps to the rotary hose.",
    position: { x: 55, y: 40 },
    category: "Fluid",
    related: [7, 16, 50]
  },
  {
    id: 56,
    name: "Surface Casing",
    description: "The first string of casing after the conductor pipe, set deep enough to protect fresh-water aquifers.",
    position: { x: 50, y: 88 },
    category: "Drilling",
    related: [26, 28, 32]
  },
  {
    id: 57,
    name: "Substructure",
    description: "The foundation on which the derrick and engines sit, providing space for wellhead equipment.",
    position: { x: 50, y: 65 },
    category: "Other",
    related: [7, 36, 51]
  },
  {
    id: 58,
    name: "Swivel",
    description: "A mechanical device that hangs from the hook, supporting the weight of the drill string while allowing it to rotate.",
    position: { x: 50, y: 48 },
    category: "Drilling",
    related: [42, 43, 49, 50]
  },
  {
    id: 59,
    name: "Tongs",
    description: "Large wrenches used to make up or break out drill pipe connections.",
    position: { x: 40, y: 57 },
    category: "Drilling",
    related: [8, 29, 53]
  },
  {
    id: 60,
    name: "Walkways",
    description: "Provide access to different areas of the rig.",
    position: { x: 30, y: 55 },
    category: "Other",
    related: [9, 30, 54]
  },
  {
    id: 61,
    name: "Weight Indicator",
    description: "A device that indicates the weight being carried by the hook, helping the driller to avoid putting too much or too little weight on the bit.",
    position: { x: 35, y: 48 },
    category: "Other",
    related: [8, 37, 39]
  }
];

export const getCategoryColor = (category: string): string => {
  const colorMap: Record<string, string> = {
    'Hoisting': '#0EA5E9',  // Light blue
    'Drilling': '#22C55E',  // Green
    'Power': '#F59E0B',     // Amber
    'Fluid': '#3B82F6',     // Blue
    'Safety': '#EF4444',    // Red
    'Housing': '#8B5CF6',   // Purple
    'Storage': '#EC4899',   // Pink
    'Other': '#6B7280',     // Gray
  };

  return colorMap[category] || '#6B7280';
};

export const getComponentById = (id: number): RigComponent | undefined => {
  return rigComponents.find(component => component.id === id);
};

export const getRelatedComponents = (id: number): RigComponent[] => {
  const component = getComponentById(id);
  if (!component) return [];
  
  return component.related
    .map(relatedId => getComponentById(relatedId))
    .filter((c): c is RigComponent => c !== undefined);
};

export const groupComponentsByCategory = () => {
  const grouped: Record<string, RigComponent[]> = {};
  
  rigComponents.forEach(component => {
    if (!grouped[component.category]) {
      grouped[component.category] = [];
    }
    grouped[component.category].push(component);
  });
  
  return grouped;
};
