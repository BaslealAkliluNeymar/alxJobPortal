import React, { useState } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';
import { Computer } from 'lucide-react'

const GridItem = ({ items }) => {
  const { name,path, number } = items;
  const [value, setValue] = useState({
    title:name,
    location:"ALL"
  })

  const iconMapping = {
    "Design":(
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_54_1714)">
      <path d="M6 42.0001H14L40 16.0001C41.0609 14.9393 41.6569 13.5004 41.6569 12.0001C41.6569 10.4998 41.0609 9.06098 40 8.00012C38.9391 6.93925 37.5003 6.34326 36 6.34326C34.4997 6.34326 33.0609 6.93925 32 8.00012L6 34.0001V42.0001Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29 11L37 19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24 16L14 6L6 14L16 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 16L11 19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M32 24L42 34L34 42L24 32" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M32 34L29 37" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_54_1714">
      <rect width="48" height="48" fill="white"/>
      </clipPath>
      </defs>
  </svg>
    ),
    "Software Engineer":(
      <svg viewBox="0 0 1024 1024" width="48" height="48" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M511.3 676.9m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M960 756V138.5H64V756h320.1v85.5H256.2v44h511.9v-44h-128V756H960zM108 182.5h808v427.1H108V182.5z m488.1 659h-168V756h168v85.5zM108 712v-82.5h808V712H108z" fill="#39393A"></path><path d="M167.536 327.703l90.72-90.721 14.143 14.142-90.721 90.72zM172.959 423.469l181.159-181.16 14.142 14.143L187.1 437.61z" fill="#E73B37"></path></g></svg>
    )
    ,
    "Data Analyst":(
      <svg viewBox="0 0 1024 1024" width="48" height="48" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M40.628 184.1c-4.42 0-8.076-3.576-8.076-7.996 0-4.422 3.498-7.998 7.904-7.998h0.172a8.002 8.002 0 0 1 7.998 7.998 8 8 0 0 1-7.998 7.996zM72.62 184.1c-4.42 0-8.076-3.576-8.076-7.996 0-4.422 3.498-7.998 7.904-7.998h0.172a8.002 8.002 0 0 1 7.998 7.998 8.004 8.004 0 0 1-7.998 7.996zM104.61 184.1c-4.42 0-8.076-3.576-8.076-7.996 0-4.422 3.498-7.998 7.904-7.998h0.172a8.002 8.002 0 0 1 7.998 7.998 8.004 8.004 0 0 1-7.998 7.996z" fill=""></path><path d="M1015.848 200.096H8.156a7.994 7.994 0 0 1-7.998-7.998v-15.994c0-13.23 10.762-23.994 23.992-23.994h975.702c13.23 0 23.992 10.764 23.992 23.994v15.994a7.994 7.994 0 0 1-7.996 7.998zM16.152 184.1h991.696v-7.996c0-4.336-3.656-7.998-7.996-7.998H24.15a8.008 8.008 0 0 0-7.998 7.998v7.996z" fill=""></path><path d="M1015.848 871.89H8.156a7.994 7.994 0 0 1-7.998-7.998V192.098a7.994 7.994 0 0 1 7.998-7.998h1007.692a7.994 7.994 0 0 1 7.996 7.998v671.794a7.994 7.994 0 0 1-7.996 7.998zM16.152 855.894h991.696V200.096H16.152v655.798z" fill=""></path><path d="M56.14 743.93a7.994 7.994 0 0 1-7.998-7.998V240.084a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v495.848a7.994 7.994 0 0 1-7.998 7.998z" fill=""></path><path d="M967.86 743.93H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h911.72c4.422 0 8 3.578 8 7.998s-3.578 7.998-8 7.998zM791.914 791.914H232.086a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h559.828a7.992 7.992 0 0 1 7.996 7.998 7.99 7.99 0 0 1-7.996 7.998zM647.958 823.904H376.042a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h271.916c4.422 0 8 3.576 8 7.996a7.994 7.994 0 0 1-8 7.998zM951.868 328.056c-13.23 0-23.996-10.762-23.996-23.992s10.766-23.994 23.996-23.994 23.992 10.764 23.992 23.994-10.762 23.992-23.992 23.992z m0-31.99c-4.406 0-8 3.584-8 7.998a8.008 8.008 0 0 0 8 7.996 8.008 8.008 0 0 0 7.996-7.996 8.008 8.008 0 0 0-7.996-7.998zM695.946 599.972c-13.23 0-23.992-10.762-23.992-23.992s10.762-23.992 23.992-23.992 23.992 10.762 23.992 23.992-10.762 23.992-23.992 23.992z m0-31.99c-4.406 0-8 3.594-8 7.998s3.594 7.998 8 7.998c4.402 0 7.996-3.594 7.996-7.998s-3.594-7.998-7.996-7.998zM392.038 456.018c-13.23 0-23.994-10.764-23.994-23.994 0-13.228 10.762-23.992 23.994-23.992 13.23 0 23.994 10.764 23.994 23.992-0.002 13.23-10.766 23.994-23.994 23.994z m0-31.99a8.006 8.006 0 0 0-7.998 7.996c0 4.414 3.592 7.998 7.998 7.998s7.998-3.584 7.998-7.998a8.01 8.01 0 0 0-7.998-7.996z" fill=""></path><path d="M120.12 647.958c-13.23 0-23.992-10.764-23.992-23.994s10.762-23.992 23.992-23.992 23.992 10.762 23.992 23.992-10.762 23.994-23.992 23.994z m0-31.99a8.014 8.014 0 0 0-7.998 7.996 8.014 8.014 0 0 0 7.998 7.998 8.012 8.012 0 0 0 7.998-7.998 8.012 8.012 0 0 0-7.998-7.996z" fill=""></path><path d="M131.242 620.842a7.936 7.936 0 0 1-3.888-1.016 7.994 7.994 0 0 1-3.092-10.886c4.202-7.544 104.812-184.912 251.782-184.912a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998c-137.662 0-236.834 174.948-237.818 176.728a7.992 7.992 0 0 1-6.984 4.092z" fill=""></path><path d="M680.136 582.792c-71.804 0-116.746-41.956-156.39-78.984-35.13-32.802-68.306-63.786-115.714-63.786a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996c53.718 0 89.128 33.076 126.632 68.088 39.316 36.724 79.976 74.682 145.472 74.682a7.99 7.99 0 0 1 7.996 7.996 7.992 7.992 0 0 1-7.996 7.998z" fill=""></path><path d="M709.55 575.652a7.984 7.984 0 0 1-7.75-6.014 7.998 7.998 0 0 1 5.766-9.732c118.242-30.272 196.532-111.864 232.676-242.512 1.156-4.256 5.546-6.738 9.844-5.576a7.99 7.99 0 0 1 5.558 9.842c-37.77 136.574-119.898 221.94-244.114 253.742a7.88 7.88 0 0 1-1.98 0.25z" fill=""></path></g></svg>
    ),
    "Data Scientist":(
      <svg viewBox="0 0 1024 1024" width="48" height="48" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M143.04 839.552c43.584 0 79.104-35.52 79.104-79.104v-448a79.168 79.168 0 0 0-158.08 0l-0.064 448c0 43.584 35.456 79.104 79.04 79.104z m-26.368-527.104a26.368 26.368 0 0 1 52.736 0v448a26.368 26.368 0 0 1-52.736 0v-448z m263.552 527.104c43.584 0 79.04-35.52 79.04-79.104V523.264c0-43.52-35.456-79.04-79.04-79.04s-79.04 35.456-79.04 79.04v237.184c0 43.584 35.456 79.104 79.04 79.104zM353.92 523.264a26.368 26.368 0 0 1 52.736 0v237.184a26.368 26.368 0 0 1-52.736 0V523.264z m500.736 316.288c43.584 0 79.04-35.52 79.04-79.104v-158.08c0-43.584-35.456-79.104-79.04-79.104s-79.04 35.52-79.04 79.104v158.08c0 43.584 35.456 79.104 79.04 79.104z m-26.368-237.184a26.368 26.368 0 0 1 52.736 0v158.08a26.368 26.368 0 0 1-52.736 0v-158.08z m-210.816 237.184c43.584 0 79.04-35.52 79.04-79.104V207.04c0-43.52-35.456-79.04-79.04-79.04s-79.04 35.456-79.04 79.04v553.408c0 43.584 35.456 79.104 79.04 79.104z m-26.368-632.512a26.368 26.368 0 0 1 52.736 0v553.408a26.368 26.368 0 0 1-52.736 0V207.04zM64 892.224h896v52.736H64v-52.736z" fill="#000000"></path></g></svg>
      // <svg viewBox="0 0 48 48" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1,.cls-2{fill:none;stroke:#1d1d1b;stroke-linejoin:round;stroke-width:2px;}.cls-2{stroke-linecap:round;}</style></defs><title></title><rect class="cls-1" height="46" rx="4" ry="4" transform="translate(48 48) rotate(180)" width="46" x="1" y="1"></rect><rect class="cls-2" height="22" width="7" x="4" y="22"></rect><rect class="cls-2" height="16" width="7" x="15" y="28"></rect><rect class="cls-2" height="25" width="7" x="26" y="19"></rect><rect class="cls-2" height="21" width="7" x="37" y="23"></rect><circle class="cls-2" cx="7" cy="14" r="2"></circle><circle class="cls-2" cx="19" cy="20" r="2"></circle><circle class="cls-2" cx="30" cy="11" r="2"></circle><circle class="cls-2" cx="41" cy="15" r="2"></circle><line class="cls-2" x1="9" x2="17" y1="15" y2="19"></line><line class="cls-2" x1="21" x2="28" y1="19" y2="12"></line><line class="cls-2" x1="32" x2="39" y1="12" y2="14"></line></g></svg>
    ),
    "BackEnd Developer":(
      <svg fill="#000000" viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z"></path></g></svg>
    ),
    "FrontEnd Developer":(
      <svg fill="#000000" width="48" height="48" ersion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M471.767,61.324H139.615c-4.598,0-8.326,3.728-8.326,8.326s3.728,8.326,8.326,8.326h332.15 c13.004,0,23.582,10.58,23.582,23.582v308.885c0,13.004-10.58,23.582-23.582,23.582H208.264c-4.598,0-8.326,3.728-8.326,8.326 s3.728,8.326,8.326,8.326h263.501c22.186,0,40.234-18.048,40.235-40.234V101.558C512.001,79.372,493.952,61.324,471.767,61.324z"></path> <path d="M174.961,434.026H40.234c-13.004,0-23.582-10.58-23.582-23.582V101.558c0-13.003,10.578-23.581,23.582-23.581h66.077 c4.598,0,8.326-3.728,8.326-8.326c0-4.598-3.728-8.326-8.326-8.326H40.234C18.048,61.325,0,79.373,0,101.558v308.886 c0,22.185,18.048,40.233,40.234,40.233h134.726c4.598,0,8.326-3.728,8.326-8.326S179.559,434.026,174.961,434.026z"></path> </g> </g> </g> <g> <g> <path d="M456.134,168.677H55.866c-4.598,0-8.326,3.728-8.326,8.326v216.528c0,4.598,3.728,8.326,8.326,8.326h296.258 c4.598,0,8.326-3.728,8.326-8.326s-3.728-8.326-8.326-8.326H64.192V185.329h383.616v199.876h-62.38 c-4.598,0-8.326,3.728-8.326,8.326s3.728,8.326,8.326,8.326h70.706c4.598,0,8.326-3.728,8.326-8.326V177.003 C464.46,172.405,460.732,168.677,456.134,168.677z"></path> </g> </g> <g> <g> <circle cx="437.701" cy="123.325" r="18.437"></circle> </g> </g> <g> <g> <circle cx="382.173" cy="123.325" r="18.437"></circle> </g> </g> <g> <g> <circle cx="326.655" cy="123.325" r="18.437"></circle> </g> </g> </g></svg>
    )   
  }
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate(`/talent/search?position=${value.title}&location=`,{state:value})
  }

  return (
      <div className="griditem-sm w-[250px] h-[190px] border-[#D6DDEB] cursor-pointer border-2 p-2 hover:bg-secondary hover:rounded-lg ease-in-out hover:text-slate-50 flex flex-col gap-3 justify-center items-start pl-5" onClick={handleClick}>
          {
            iconMapping[name] || iconMapping['Design']
          }
        <h1 className="font-poppins text-[1.5rem] font-bold">{name}</h1>
        <div className="flex justify-start items-center gap-1">
          <p>{number} Candidates available</p>
          <ArrowRightIcon />
        </div>
      </div>
    
  );
};

export default GridItem;
