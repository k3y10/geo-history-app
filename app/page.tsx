'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slider';

interface TimeScalePeriod {
  name: string;
  type: 'Eon' | 'Era' | 'Period' | 'Epoch';
  details: string;
  highlights: string[];
  startYear: number;
  endYear: number;
  additionalInfo?: {
    events: {
      name: string;
      description: string;
    }[];
    indexFossils?: {
      name: string;
      description: string;
    }[];
    rocks?: {
      name: string;
      description: string;
    }[];
    rocksMineralsFossils?: {
      name: string;
      description: string;
    }[];
    organisms?: {
      name: string;
      description: string;
    }[];
    subdivisions?: { // Add subdivisions property here
      name: string;
      description: string;
    }[];
  };
}




const Home: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimeScalePeriod | null>(null);
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [sliderHeight, setSliderHeight] = useState<number>(0);

  const geologicalTimeScale: TimeScalePeriod[] = [
    {
      name: '4600 ma - 4000 ma Hadean ',
      type: 'Eon',
      details: 'This eon spans from 4600 to 4000 million years ago. It is the oldest eon of Earth\'s existence.',
      highlights: [
        'Tectonic Activity: very volcanic, most likely a molten surface.',
        'Late Heavy Bombardment Theory: comets and asteroids consistently hit earth contributing to the melting of material and landscape forming.',
        'Possibly the time of water formation on Earth'
      ],
      startYear: 4600,
      endYear: 4000,
      additionalInfo: {
        events: [],
        rocksMineralsFossils: []
      }
    },
    {
      name: ' 4000 ma - 2500 ma Archean',
      type: 'Eon',
      details: 'The Archean eon spans from 4000 to 2500 million years ago. It is characterized by significant geological and biological developments.',
      highlights: [
        'Continental crust formation',
        'Origin of Life Theories',
        'First appearance of rocks, minerals, and fossils'
      ],
      startYear: 4000,
      endYear: 2500,
      additionalInfo: {
        events: [
          {
            name: 'Eoarchean',
            description: 'The earliest subdivision of the Archean Eon, characterized by the formation of the oldest rocks on Earth.'
          },
          {
            name: 'Paleoarchean',
            description: 'Following the Eoarchean, marked by the widespread occurrence of cratons and the development of continental crust.'
          },
          {
            name: 'Mesoarchean',
            description: 'A period with extensive cratonization and the growth of stable continental nuclei.'
          },
          {
            name: 'Neoarchean',
            description: 'The final subdivision of the Archean Eon, characterized by the formation of major continental blocks and greenstone belts.'
          }
        ],
        rocksMineralsFossils: [
          {
            name: 'Komatites',
            description: 'Young, hot mantle material that is relatively rare.'
          },
          {
            name: 'Zircon',
            description: 'Oldest known Earth material, found in granite formations.'
          },
          {
            name: 'Acasta Gneiss Complex',
            description: 'Granitic gneiss and granitic plutonic rocks, along with sedimentary deposits.'
          },
          {
            name: 'Greenstone Belt',
            description: 'Formation of clastic volcanic rocks, basalts, pillow lavas, and epidote.'
          },
          {
            name: 'Stromatolites',
            description: 'Oldest known life forms, mats of cyanobacteria that played a key role in oxygenating Earth\'s oceans.'
          },
          {
            name: 'Banded Iron Formations',
            description: 'Significant geological formations resulting from the oxygenation of Earth\'s oceans.'
          }
        ]
      }
    },
    {
      name: '2500 ma - 365 ma Proterozoic',
      type: 'Eon',
      details: 'The Proterozoic eon spans from 2500 to 541 million years ago.',
      highlights: [
        'Rise of atmospheric oxygen',
        'Development of photosynthesis',
        'Includes Paleoproterozoic, Mesoproterozoic, Neoproterozoic eras'
      ],
      startYear: 2500,
      endYear: 365,
      additionalInfo: {
        events: [
          {
            name: 'Paleoproterozoic',
            description: 'The Paleoproterozoic era spans from 2500 to 1600 million years ago. It was characterized by the Great Oxygenation Event and the assembly of the supercontinent.'
          },
          {
            name: 'Mesoproterozoic',
            description: 'The Mesoproterozoic era spans from 1600 to 1000 million years ago. It was marked by the formation of the Rodinia supercontinent and the peak of stromatolites.'
          },
          {
            name: 'Neoproterozoic',
            description: 'The Neoproterozoic era spans from 1000 to 541 million years ago. It was characterized by significant global glaciations (Snowball Earth), the Cambrian Explosion, and the appearance of complex multicellular organisms.'
          }
        ],
        rocksMineralsFossils: [
          // You can add relevant rocks, minerals, and fossils for the Proterozoic Eon here
        ]
      }
    },
    {
      name: '2500 ma - 1600 ma Paleoproterozoic',
      type: 'Era',
      details: 'The Paleoproterozoic era spans from 2500 to 1600 million years ago.',
      highlights: [
        'Rise of atmospheric oxygen',
        'Photochemical Dissociation',
        'Great Oxygenation Event',
        'Assembly of supercontinent',
        'Breakup of older continents',
        'Stable Cratons, widespread volcanic activity',
        'Development of photosynthesis',
      ],
      startYear: 2500,
      endYear: 1600,
      additionalInfo: {
        events: [
          {
            name: 'Siderian',
            description: 'The earliest subdivision of the Paleoproterozoic era, characterized by the formation of stable cratons and widespread volcanic activity.'
          },
          {
            name: 'Rhyacian',
            description: 'A period marked by the rise of atmospheric oxygen and the development of photosynthesis, contributing to the Great Oxygenation Event.'
          },
          {
            name: 'Orosirian',
            description: 'During this period, older continents began to break up, leading to the assembly of a supercontinent.'
          },
          {
            name: 'Statherian',
            description: 'A period of continued diversification of eukaryotic cells and the emergence of diverse life forms, including protists and ammonoids.'
          }
        ],
        rocksMineralsFossils: [
          {
            name: 'Stromatolites',
            description: 'Fossilized structures formed by cyanobacteria mats, indicating the presence of early life forms.'
          },
          {
            name: 'Ammonoids',
            description: 'Extinct marine mollusks with coiled spiral shells, common during the Paleoproterozoic era.'
          },
          {
            name: 'Protista',
            description: 'A diverse group of eukaryotic microorganisms, including various single-celled organisms and algae.'
          },
          {
            name: 'Meta-sedimentary',
            description: 'Metamorphic rocks derived from pre-existing sedimentary rocks, altered by heat and pressure.'
          },
          {
            name: 'Meta-volcanic',
            description: 'Metamorphic rocks derived from volcanic rocks, altered by heat and pressure.'
          },
          {
            name: 'Banded Iron Formations',
            description: 'Distinctive sedimentary rocks consisting of alternating layers of iron-rich minerals and silica.'
          },
          {
            name: 'Basement Rocks',
            description: 'The foundation rocks underlying continents, consisting of older igneous and metamorphic rocks.'
          },
          {
            name: 'Tonalite',
            description: 'A granitic rock with a specific composition of minerals, commonly found in continental crust.'
          },
          {
            name: 'Trondhjemite',
            description: 'A light-colored intrusive igneous rock similar to granite, often associated with ancient continental crust.'
          },
          {
            name: 'Granodiorite',
            description: 'An intermediate intrusive rock composed of plagioclase, quartz, and biotite or amphibole, found in continental crust.'
          }
        ],
        organisms: [
          {
            name: 'Bacteria',
            description: 'Prokaryotic microorganisms, many of which played key roles in Earth\'s early biosphere.'
          },
          {
            name: 'Archaea',
            description: 'Single-celled microorganisms with a prokaryotic cell structure, distinct from bacteria.'
          },
          {
            name: 'Prokaryotes',
            description: 'Organisms lacking a cell nucleus or any other membrane-bound organelles.'
          },
          {
            name: 'Eukaryotic cells continue to diversify',
            description: 'Evolutionary development of cells with a true nucleus and membrane-bound organelles.'
          },
          {
            name: 'Stromatolites',
            description: 'Layered structures formed by the trapping and binding of sedimentary grains by microbial communities.'
          },
          {
            name: 'Ammonoids',
            description: 'Extinct group of marine mollusks characterized by coiled shells, abundant during the Paleoproterozoic.'
          },
          {
            name: 'Protista',
            description: 'Diverse group of eukaryotic microorganisms, including algae and protozoans.'
          }
        ],
        subdivisions: [
          {
            name: 'Siderian',
            description: 'The earliest subdivision of the Paleoproterozoic era, marked by the formation of stable cratons and widespread volcanic activity.'
          },
          {
            name: 'Rhyacian',
            description: 'Period marked by the rise of atmospheric oxygen and development of photosynthesis.'
          },
          {
            name: 'Orosirian',
            description: 'Period characterized by the breakup of older continents and assembly of a supercontinent.'
          },
          {
            name: 'Statherian',
            description: 'Period of continued diversification of eukaryotic cells and emergence of diverse life forms.'
          }
        ],
        indexFossils: [
          {
            name: 'Stromatolites',
            description: 'Fossilized structures formed by microbial communities, indicative of early life forms.'
          },
          {
            name: 'Ammonoids',
            description: 'Extinct marine mollusks with coiled shells, important index fossils during the Paleoproterozoic era.'
          },
          {
            name: 'Protista',
            description: 'Diverse group of eukaryotic microorganisms, including various single-celled organisms and algae.'
          }
        ],
        rocks: [
          {
            name: 'Meta-sedimentary',
            description: 'Metamorphic rocks derived from pre-existing sedimentary rocks, altered by heat and pressure.'
          },
          {
            name: 'Meta-volcanic',
            description: 'Metamorphic rocks derived from volcanic rocks, altered by heat and pressure.'
          },
          {
            name: 'Banded Iron Formations',
            description: 'Distinctive sedimentary rocks consisting of alternating layers of iron-rich minerals and silica.'
          },
          {
            name: 'Basement Rocks',
            description: 'Foundation rocks underlying continents, consisting of older igneous and metamorphic rocks.'
          },
          {
            name: 'Tonalite',
            description: 'Granitic rock commonly found in continental crust, composed of plagioclase, quartz, and amphibole.'
          },
          {
            name: 'Trondhjemite',
            description: 'Light-colored intrusive igneous rock similar to granite, associated with ancient continental crust.'
          },
          {
            name: 'Granodiorite',
            description: 'Intermediate intrusive rock composed of plagioclase, quartz, and biotite or amphibole.'
          }
        ]
      }
    },
    {
      name: '1600 ma - 1000 ma Mesoproterozoic',
      type: 'Era',
      details: 'The Mesoproterozoic era spans from 1600 to 1000 million years ago.',
      highlights: [
        'Rodinia supercontinent',
        'Peak of stromatolites',
        'Evolution of multicellular organisms'
      ],
      startYear: 1600,
      endYear: 1000,
      additionalInfo: {
        events: [
          {
            name: 'Calymmian',
            description: 'Period characterized by major glaciations and the formation of the supercontinent Pannotia.'
          },
          {
            name: 'Ectasian',
            description: 'Marked by "Snowball Earth" or "Slushball Earth" episodes, with extensive glaciations and a frozen Earth.'
          },
          {
            name: 'Stenian',
            description: 'Late Neoproterozoic period known for the appearance of the Ediacaran biota, representing early complex multicellular organisms.'
          }
        ],
        rocksMineralsFossils: [
          {
            name: 'Gneiss Belt',
            description: 'Region dominated by metamorphic rocks, particularly gneiss, indicating significant tectonic activity.'
          },
          {
            name: 'Metasedimentary Belt',
            description: 'Belt of rocks that have undergone metamorphism from original sedimentary rocks.'
          },
          {
            name: 'Granulite Terrane',
            description: 'Geological region characterized by granulite facies metamorphism, often associated with high-grade metamorphic rocks.'
          }
        ],
        organisms: [
          {
            name: 'Stromatolites',
            description: 'Microbial mats of cyanobacteria that reached their peak abundance and diversity during this era.'
          },
          {
            name: 'First Animals',
            description: 'Emergence of early multicellular organisms, including Kimberella, Dickinsonia, and other macroscopic body fossils.'
          }
        ],
        indexFossils: [
          {
            name: 'Microfossils',
            description: 'Small-scale fossils of microscopic organisms, providing key evidence of early life forms.'
          },
          {
            name: 'Macroscopic Body Fossils',
            description: 'Fossils of larger, multicellular organisms that represent important stages in evolutionary history.'
          },
          {
            name: 'Microbial Structures',
            description: 'Remnants of microbial activity preserved in rocks, contributing to the understanding of ancient ecosystems.'
          }
        ],
        subdivisions: [
          {
            name: 'Calymmian',
            description: 'Subdivision of the Mesoproterozoic era, marked by tectonic activity and the peak of stromatolites.'
          },
          {
            name: 'Ectasian',
            description: 'Period during which sexual reproduction evolved and multicellular organisms diversified.'
          },
          {
            name: 'Stenian',
            description: 'Late stage of the Mesoproterozoic era, marked by the appearance of the first animals and macroscopic body fossils.'
          }
        ],
        rocks: [
          {
            name: 'Gneiss Belt',
            description: 'Region dominated by metamorphic rocks, particularly gneiss, indicating significant tectonic activity.'
          },
          {
            name: 'Metasedimentary Belt',
            description: 'Belt of rocks that have undergone metamorphism from original sedimentary rocks.'
          },
          {
            name: 'Granulite Terrane',
            description: 'Geological region characterized by granulite facies metamorphism, often associated with high-grade metamorphic rocks.'
          }
        ]
      }
    },
    {
      name: '1000 ma - 541 ma Neoproterozoic',
      type: 'Era',
      details: 'The Neoproterozoic era spans from 1000 to 541 million years ago.',
      highlights: [
        'Snowball Earth or Slushball Earth',
        'Cambrian Explosion',
        'Appearance of complex multicellular organisms'
      ],
      startYear: 1000,
      endYear: 541,
      additionalInfo: {
        events: [
          {
            name: 'Tonian',
            description: 'Period characterized by major glaciations and the formation of the supercontinent Pannotia.'
          },
          {
            name: 'Cryogenian',
            description: 'Marked by "Snowball Earth" or "Slushball Earth" episodes, with extensive glaciations and a frozen Earth.'
          },
          {
            name: 'Ediacaran',
            description: 'Late Neoproterozoic period known for the appearance of the Ediacaran biota, representing early complex multicellular organisms.'
          }
        ],
        rocksMineralsFossils: [
          {
            name: 'Tillites',
            description: 'Glacial deposits containing lithified glacial till, indicative of past ice ages.'
          },
          {
            name: 'Dropstones',
            description: 'Large rocks that were carried and deposited by glaciers into marine sediments during glacial periods.'
          }
        ],
        organisms: [
          {
            name: 'Trilobites',
            description: 'Early arthropods with segmented bodies, common in marine environments during the Cambrian Period.'
          },
          {
            name: 'Sponges',
            description: 'Simple, filter-feeding animals that appeared during the Neoproterozoic and became widespread in marine environments.'
          },
          {
            name: 'Archaeocyathids',
            description: 'Extinct, reef-building organisms with calcareous skeletons, prominent in the early Cambrian.'
          }
        ],
        indexFossils: [
          {
            name: 'Trace Fossils',
            description: 'Indirect evidence of ancient life activities, such as burrows, tracks, and fecal pellets.'
          },
          {
            name: 'Ediacaran Biota',
            description: 'Diverse group of soft-bodied organisms that flourished during the Ediacaran Period, representing the earliest complex multicellular life.'
          }
        ],
        rocks: [
          {
            name: 'Glacial Deposits',
            description: 'Sedimentary rocks formed from the accumulation and lithification of glacial material, including tillites and dropstones.'
          }
        ]
      }
    },
    {
      name: '365 ma - Present Phanerozoic',
      type: 'Eon',
      details: 'The Phanerozoic eon spans from 541 million years ago to present.',
      highlights: [
        'Diversification of life forms',
        'Advent of complex multicellular organisms',
        'Includes Paleozoic, Mesozoic, Cenozoic eras'
      ],
      startYear: 541,
      endYear: 0, // The present
      additionalInfo: {
        events: [
          {
            name: 'Paleozoic',
            description: 'The Paleozoic era spans from 541 to 251 million years ago. It witnessed the Great Ordovician Biodiversification Event, the rise of carboniferous rainforests, and the formation of extensive coal deposits.'
          },
          {
            name: 'Mesozoic',
            description: 'The Mesozoic era spans from 251 to 66 million years ago. It was characterized by the rise of dinosaurs, the Cretaceous-Paleogene extinction event, and the dominance of reptiles with the emergence of mammals.'
          },
          {
            name: 'Cenozoic',
            description: 'The Cenozoic era spans from 66 million years ago to the present. It is marked by the rapid diversification of mammals and birds, ice age cycles, and the emergence and evolution of Homo sapiens.'
          }
        ],
        rocksMineralsFossils: [
          // You can add relevant rocks, minerals, and fossils for the Phanerozoic Eon here
        ]
      }
    },
    {
      name: '541 ma - 251 ma Paleozoic',
      type: 'Era',
      details: 'The Paleozoic era spans from 541 to 251 million years ago.',
      highlights: [
        'Great Ordovician Biodiversification Event',
        'Carboniferous rainforests',
        'Formation of extensive coal deposits',
        'End-Permian Mass Extinction',
        'Acadian Orogeny',
        'Taconic Orogeny',
        'Caledonian Orogeny',
        'Formation of Pangaea'
      ],
      startYear: 541,
      endYear: 251,
      additionalInfo: {
        events: [
          {
            name: 'Cambrian',
            description: 'Period marked by the emergence of diverse marine life, including trilobites, brachiopods, and early echinoderms.'
          },
          {
            name: 'Ordovician',
            description: 'Characterized by the Great Ordovician Biodiversification Event, with a vast warm epeiric sea promoting species diversity.'
          },
          {
            name: 'Silurian',
            description: 'Period featuring the colonization of land by plants, as well as the diversification of marine life.'
          },
          {
            name: 'Devonian',
            description: 'Known as the "Age of Fishes," with the emergence of diverse fish groups and the first tetrapods.'
          },
          {
            name: 'Mississippian',
            description: 'Characterized by the Carboniferous rainforests and the formation of extensive coal deposits.'
          },
          {
            name: 'Pennsylvanian',
            description: 'Period marked by the diversification of amphibians and the dominance of coal forests.'
          },
          {
            name: 'Permian',
            description: 'Culminated in the End-Permian Mass Extinction, the most severe extinction event in Earth\'s history.'
          }
        ],
        organisms: [
          {
            name: 'Trilobites',
            description: 'Early arthropods with segmented bodies, prominent in the Cambrian Period.'
          },
          {
            name: 'Brachiopods',
            description: 'Marine organisms with bivalve shells, common in Paleozoic seas.'
          },
          {
            name: 'Early Echinoderms',
            description: 'Primitive marine animals related to modern sea stars and sea urchins.'
          },
          {
            name: 'Amphibians',
            description: 'First tetrapods that emerged from fish ancestors during the Devonian Period.'
          }
        ],
        indexFossils: [
          {
            name: 'Conodonts',
            description: 'Microscopic tooth-like fossils used as index fossils for dating rock layers.'
          },
          {
            name: 'Trilobites (e.g., Paradoxides pinus)',
            description: 'Distinctive trilobite species used for stratigraphic correlation and dating.'
          },
          {
            name: 'Bathyurus extans',
            description: 'Species of trilobite known for its widespread occurrence in Paleozoic rocks.'
          },
          {
            name: 'Tetragraptus fructicosus',
            description: 'Genus of graptolite used as an index fossil for dating Ordovician strata.'
          }
        ],
        rocksMineralsFossils: [
          {
            name: 'Molasse Sequence',
            description: 'Fluvial and deltaic deposits formed in foreland basins during tectonic compression.'
          },
          {
            name: 'Flysch Sequence',
            description: 'Turbidite package deposited in deep marine environments associated with subduction zones.'
          },
          {
            name: 'Burgess Shale',
            description: 'Famous Lagerstätte fossil site containing exceptionally preserved Cambrian organisms.'
          }
        ],
        rocks: [
          {
            name: 'Sedimentary Sequences (e.g., Sauk, Tippecanoe, Kaskaskia, Absaroka)',
            description: 'Distinctive sedimentary sequences representing different periods of Paleozoic deposition.'
          }
        ]
      }
    },
    {
      name: '251 ma - 66 ma Mesozoic',
      type: 'Era',
      details: 'The Mesozoic era spans from 251 to 66 million years ago.',
      highlights: [
        'Rise of dinosaurs',
        'Cretaceous-Paleogene extinction event',
        'Dominance of reptiles and emergence of mammals'
      ],
      startYear: 251,
      endYear: 66,
      additionalInfo: {
        events: [
          {
            name: 'Triassic',
            description: 'First period of the Mesozoic era, marked by the rise of dinosaurs and significant geological events.'
          },
          {
            name: 'Jurassic',
            description: 'Middle period characterized by the dominance of dinosaurs and diverse ecosystems.'
          },
          {
            name: 'Cretaceous',
            description: 'Final period known for the evolution of flowering plants and the extinction of dinosaurs.'
          }
        ],
        rocksMineralsFossils: [
          {
            name: 'Palisades Sill',
            description: 'Basaltic intrusion in New Jersey, USA, formed during the Mesozoic era.'
          },
          {
            name: 'Chinle Formation',
            description: 'Geological formation known for uranium deposits and dinosaur fossils from the Triassic period.'
          },
          {
            name: 'Molasse Sequence',
            description: 'Sedimentary sequence consisting of fluvial and deltaic deposits, characteristic of the Mesozoic era.'
          }
        ],
        organisms: [
          {
            name: 'Dinosaurs',
            description: 'Dominant terrestrial reptiles during the Mesozoic era, including various groups like theropods and sauropods.'
          },
          {
            name: 'Mammals',
            description: 'Emerging group of vertebrates that diversified and evolved alongside dinosaurs.'
          }
        ],
        indexFossils: [
          {
            name: 'Trilobites',
            description: 'Ancient marine arthropods, common in Paleozoic rocks but extinct by the Mesozoic era.'
          },
          {
            name: 'Ammonites',
            description: 'Extinct marine mollusks with spiral shells, abundant during the Mesozoic era.'
          }
        ],
        rocks: [
          {
            name: 'Sandstone',
            description: 'Common sedimentary rock formed from sand-sized minerals, prevalent in Mesozoic environments.'
          },
          {
            name: 'Limestone',
            description: 'Calcium carbonate rock, often associated with marine environments and fossil preservation.'
          }
        ]
      }
    },
    {
  name: '66 ma - present Cenozoic',
  type: 'Era',
  details: 'The Cenozoic era spans from 66 million years ago to the present.',
  highlights: [
    'Rapid diversification of mammals and birds',
    'Ice age cycles',
    'Emergence and evolution of Homo sapiens'
  ],
  startYear: 66,
  endYear: 0, // The present
  additionalInfo: {
    events: [
      {
        name: 'Paleogene',
        description: 'First period of the Cenozoic era, marked by recovery from the K-Pg extinction and warm climatic conditions. Characterized by the emergence and diversification of early mammals and birds.',
      },
      {
        name: 'Paleocene',
        description: 'Early epoch of the Paleogene period, following the mass extinction event (K-Pg). Marked by the recovery and diversification of terrestrial and marine life, including the emergence of new mammal groups.',
      },
      {
        name: 'Eocene',
        description: 'Epoch of the Paleogene characterized by a warm global climate and the expansion of tropical forests. Notable for the diversification of mammals and the emergence of modern orders.',
      },
      {
        name: 'Oligocene',
        description: 'Epoch following the Eocene, marked by a cooling climate and the transition to more open landscapes. Witnessed the diversification of large mammals, including ancestral forms of modern species.',
      },
      {
        name: 'Neogene',
        description: 'Later period characterized by ice age cycles, uplift of mountain ranges, and the diversification of mammal families. Notable events include the emergence of Homo genus and significant geological changes.',
      },
      {
        name: 'Miocene',
        description: 'Epoch within the Neogene, marked by diverse terrestrial environments and the spread of grasslands. Witnessed the evolution of early hominins and the diversification of mammal families.',
      },
      {
        name: 'Pliocene',
        description: 'Epoch following the Miocene, characterized by global cooling and the spread of grasslands. Notable for the emergence of early humans (Homo genus) and the extinction of numerous species.',
      },
      {
        name: 'Quaternary',
        description: 'Current period featuring glacial-interglacial cycles, megafaunal extinctions, and the emergence of Homo sapiens. Witnessed the development of modern ecosystems and human civilizations.',
      },
      {
        name: 'Pleistocene',
        description: 'Epoch within the Quaternary known for extensive glaciation and the presence of large ice sheets. Notable for the evolution and migration of Homo sapiens and the extinction of megafauna.',
      },
      {
        name: 'Holocene',
        description: 'Current epoch within the Quaternary, marked by relatively stable climatic conditions and the rise of human civilizations. Notable for human impacts on the environment and biodiversity.',
      }
    ],
    rocksMineralsFossils: [], // Placeholder for rocks, minerals, and fossils (add data as needed)
    organisms: [
      {
        name: 'Early Primates',
        description: 'Emergence of primate ancestors during the Paleocene and their subsequent diversification in the Eocene.',
      },
      {
        name: 'Rapidly Diversifying Mammals and Birds',
        description: 'Explosive diversification and adaptation of mammals and birds during the Cenozoic, filling ecological niches.',
      },
      {
        name: 'Homo Sapiens',
        description: 'Appearance and evolution of modern humans (Homo sapiens) during the Quaternary period.',
      }
    ],
    indexFossils: [
      {
        name: 'Scaphites hippocrepis',
        description: 'Ammonite species used as an index fossil for dating marine sediments in the Cretaceous-Paleogene transition.',
      },
      {
        name: 'Calyptraphorus velatus',
        description: 'Fossil bivalve species commonly found in Neogene marine sediments.',
      },
      {
        name: 'Pecten gibbus',
        description: 'Species of scallop used as an index fossil in Quaternary deposits, indicating past marine environments.',
      }
    ],
    rocks: [
      {
        name: 'Shale',
        description: 'Fine-grained sedimentary rock composed of mud and clay minerals, abundant in Cenozoic deposits.',
      },
      {
        name: 'Sandstone',
        description: 'Sedimentary rock composed of sand-sized grains, often deposited in terrestrial and marine environments.',
      },
      {
        name: 'Limestone',
        description: 'Carbonate rock formed from the accumulation of marine organisms, common in Cenozoic marine settings.',
      },
      {
        name: 'Basalt Flows',
        description: 'Volcanic rock formed from the rapid cooling of lava, widespread during the Cenozoic in various regions.',
      },
      {
        name: 'Glacial Deposits',
        description: 'Sediments deposited by glaciers, including till, moraines, and erratics, recording ice age events.',
      }
    ]
  }
}

  ];
  useEffect(() => {
    const headerHeight = document.querySelector('.header')?.clientHeight || 0;
    const footerHeight = document.querySelector('.footer')?.clientHeight || 0;
    const availableHeight = window.innerHeight - headerHeight - footerHeight - 40;

    setSliderHeight(availableHeight);
  }, []);

  const handleTimeScaleButtonClick = (timeScaleName: string) => {
    const selectedPeriod = geologicalTimeScale.find((period) => period.name === timeScaleName);
    if (selectedPeriod) {
      setSelectedPeriod(selectedPeriod);
      const index = geologicalTimeScale.indexOf(selectedPeriod);
      setSliderValue(index);
    }
  };

  const handleSliderChange = (value: number) => {
    const selectedPeriod = geologicalTimeScale[value];
    setSelectedPeriod(selectedPeriod);
    setSliderValue(value);
  };

  return (
    <div className="page-container">
    <header className="header">
      <h1 className="title">Geological Timeline Scale</h1>
    </header>

      <div className="container">
        <div className="left-container">
          {geologicalTimeScale.map((period, index) => (
            <button
              key={index}
              className={`time-scale-button ${period.type}`}
              onClick={() => handleTimeScaleButtonClick(period.name)}
            >
              {period.name}
            </button>
          ))}
        </div>

        <div className="middle-container">
          <div
            className="line"
            style={{ top: `${(sliderValue / (geologicalTimeScale.length - 1)) * sliderHeight}px` }}
          />
          <Slider
            className="custom-slider vertical-slider"
            thumbClassName="custom-thumb"
            trackClassName="custom-track"
            min={0}
            max={geologicalTimeScale.length - 1}
            orientation="vertical"
            onChange={handleSliderChange}
            value={sliderValue}
          />
        </div>

        <div className="right-container">
          {selectedPeriod && (
            <div className="period-details">
              <h2 className="text-l font-semibold mb-2">{selectedPeriod.name}</h2>
              <p className="text-gray-700 mb-4">{selectedPeriod.details}</p>
              <ul className="list-disc list-inside text-gray-700">
                {selectedPeriod.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
              {/* Display additional info based on selected period */}
              {selectedPeriod.additionalInfo?.events.map((event, index) => (
                <div key={index} className="popup">
                  <h3 style={{ color: getPopupColor(event.name) }}>{event.name}</h3>
                  <p>{event.description}</p>
                  {/* Display nested information (e.g., rocks, index fossils) */}
                  {event.name === 'Mesozoic' && (
                    <div className="nested-popup">
                      <h4>Rocks & Minerals:</h4>
                      <ul>
                        {selectedPeriod.additionalInfo?.rocks?.map((rock, rockIndex) => (
                          <li key={rockIndex}>{rock.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
           <div className="map-key">
        <div className="map-item">
          <div className="map-color purple"></div>
          <span>Eon</span>
        </div>
        <div className="map-item">
          <div className="map-color orange"></div>
          <span>Era</span>
        </div>
        <div className="map-item">
          <div className="map-color green"></div>
          <span>Period</span>
        </div>
        <div className="map-item">
          <div className="map-color red"></div>
          <span>Epoch</span>
        </div>
      </div>
        </div>
      </div>
      <footer className="footer">
        <p>By: Ericka Downs 04/30/2024 Geo Project</p>
      </footer>
    </div>
  );
};
  
const getPopupColor = (eventName: string): string => {
  switch (eventName) {
    case 'Hadean':
    case 'Archean':
    case 'Proterozoic':
    case 'Paleoproterozoic':
    case 'Mesoproterozoic':
    case 'Neoproterozoic':
    case 'Phanerozoic':
      return '#8e44ad'; // Purple

    case 'Eoarchean':
    case 'Paleoarchean':
    case 'Mesoarchean':
    case 'Neoarchean':
    case 'Paleoproterozoic':
    case 'Mesoproterozoic':
    case 'Neoproterozoic':
    case 'Paleozoic':
    case 'Mesozoic':
    case 'Cenozoic':

     return '#f39c12'; // Orange
    case 'Eoarchean':
    case 'Siderian':
    case 'Rhyacian':
    case 'Orosirian':
    case 'Statherian':
    case 'Calymmian':
    case 'Ectasian':
    case 'Stenian':
    case 'Tonian':
    case 'Cryogenian':
    case 'Ediacaran':
    case 'Cambrian':
    case 'Ordivician':
    case 'Silurian':
    case 'Devonian':
    case 'Mississippian':
    case 'Pennsylvanian':
    case 'Permian':
    case 'Triassic':
    case 'Jurassic':
    case 'Cretaceous':
    case 'Paleogene':
    case 'Quaternary':
    case 'Neogene':

  
      return '#27ae60'; // Green
    case 'Paleocene':
    case 'Eocene':
    case 'Oligocene':
    case 'Miocene':
    case 'Holocene':
    case 'Pleistocene':
    case 'Pliocene':
    case 'Miocene':

      return '#e74c3c';  // Red
    default:
      return '#000'; // Default color (black)
  }
};

export default Home;