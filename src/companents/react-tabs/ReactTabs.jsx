import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HomeComponent from '../../companents/home/HomeComponent';
import HomeCards from '../../companents/home/HomeCards';

function ReactTabs() {
  return (
    <Tabs>
      <TabList>
        <div className='container mx-auto py-7 flex items-center justify-between'>
          <Tab>
            <HomeComponent src={"/Fire.png"} title={"Акции"}/>
          </Tab>
          <Tab>
            <HomeComponent src={"/Pizza.png"} title={"Пицца"} />
          </Tab>
          <Tab>
            <HomeComponent src={"/sushi.png"} title={"Суши"} />
          </Tab>
          <Tab>
            <HomeComponent src={"/Drink.png"} title={"Напитки"} />
          </Tab>
          <Tab>
            <HomeComponent src={"/Snacks.png"} title={"Закуски"} />
          </Tab>
          <Tab>
            <HomeComponent src={"/Combo.png"} title={"Комбо"} />
          </Tab>
          <Tab>
            <HomeComponent src={"/Dessert.png"} title={"Десерты"} />
          </Tab>
          <Tab>
            <HomeComponent src={"/Sauce.png"} title={"Соусы"} />
          </Tab>
        </div>
      </TabList>

      <TabPanel>
        <Tab>
          <div className='container mx-auto'>
            <div>
              <div className='flex items-center justify-between'>
                <HomeCards src={"/aksiya.png"} />
                <HomeCards src={"/aksiya.png"} />
                <HomeCards src={"/aksiya.png"} />
                <HomeCards src={"/aksiya.png"} />
              </div>
            </div>
            
          </div>
        </Tab>
      </TabPanel>
      <TabPanel>
        <Tab>
          <div className='container mx-auto'>
            {/* <div className='flex  items-center justify-between'>
              <h1 className='text-[40px] text-[#191919] font-semibold'>Пицца</h1>
              <div className='flex items-center gap-1 border-[1px] border-[#F0F0F0] w-[115px] h-[35px] justify-center rounded-[6px] hover:bg-[#F9F9F9] duration-300'>
                <img src="/Filter.png" alt="" />
                <p className='text-[16px] text-[#000000]'>Фильтры</p>
              </div>
            </div> */}
            <div>
              <div className='flex items-center justify-between'>
                <HomeCards src={"/pitsa1.png"}/>
                <HomeCards src={"/pitsa1.png"}/>
                <HomeCards src={"/pitsa1.png"}/>
                <HomeCards src={"/pitsa1.png"}/>
              </div>
            </div>
          </div>
        </Tab>
      </TabPanel>
      <TabPanel>
        <Tab>
          <Tab>
            <div className='container mx-auto'>
              {/* <div className='flex  items-center justify-between'>
                <h1 className='text-[40px] text-[#191919] font-semibold'>Суши</h1>
                <div className='flex items-center gap-1 border-[1px] border-[#F0F0F0] w-[115px] h-[35px] justify-center rounded-[6px] hover:bg-[#F9F9F9] duration-300'>
                  <img src="/Filter.png" alt="" />
                  <p className='text-[16px] text-[#000000]'>Фильтры</p>
                </div>
              </div> */}
              <div>
                <div className='flex items-center justify-between'>
                  <HomeCards src={"/sushi-bg.png"} />
                  <HomeCards src={"/sushi-bg.png"} />
                  <HomeCards src={"/sushi-bg.png"} />
                  <HomeCards src={"/sushi-bg.png"} />
                </div>
              </div>
            </div>
          </Tab>
        </Tab>
      </TabPanel>
      <TabPanel>
        <Tab>
          <div className='container mx-auto'>
            <div>
              <div className='flex items-center justify-between'>
                <HomeCards src={"/pepsi.png"} />
                <HomeCards src={"/pepsi.png"} />
                <HomeCards src={"/pepsi.png"} />
                <HomeCards src={"/pepsi.png"} />
              </div>
            </div>
          </div>
        </Tab>
      </TabPanel>
      <TabPanel>
        <Tab>
          <div className='container mx-auto'>
            {/* <div className='flex  items-center justify-between'>
              <h1 className='text-[40px] text-[#191919] font-semibold'>Закуски</h1>
              <div className='flex items-center gap-1 border-[1px] border-[#F0F0F0] w-[115px] h-[35px] justify-center rounded-[6px] hover:bg-[#F9F9F9] duration-300'>
                <img src="/Filter.png" alt="" />
                <p className='text-[16px] text-[#000000]'>Фильтры</p>
              </div>
            </div> */}
            <div>
              <div className='flex items-center justify-between'>
                <HomeCards src={"kfc1.png"} />
                <HomeCards src={"kfc1.png"} />
                <HomeCards src={"kfc1.png"} />
                <HomeCards src={"kfc1.png"} />
              </div>
            </div>
          </div>
        </Tab>
      </TabPanel>
      <TabPanel>
        <Tab>
          <div className='container mx-auto'>
          {/* <div className='flex  items-center justify-between'>
            <h1 className='text-[40px] text-[#191919] font-semibold'>Комбо</h1>
            <div className='flex items-center gap-1 border-[1px] border-[#F0F0F0] w-[115px] h-[35px] justify-center rounded-[6px] hover:bg-[#F9F9F9] duration-300'>
              <img src="/Filter.png" alt="" />
              <p className='text-[16px] text-[#000000]'>Фильтры</p>
            </div>
          </div> */}
          <div>
              <div className='flex items-center justify-between'>
                <HomeCards src={"/aksiya1.png"} />
                <HomeCards src={"/aksiya1.png"} />
                <HomeCards src={"/aksiya1.png"} />
                <HomeCards src={"/aksiya1.png"} />
              </div>
          </div>
        </div>
        </Tab>
      </TabPanel>
      <TabPanel>
        <Tab>
          <div className='container mx-auto'>
          <div>
              <div className='flex items-center justify-between'>
                <HomeCards src={"/morojniy.png"} />
                <HomeCards src={"/morojniy.png"} />
                <HomeCards src={"/morojniy.png"} />
                <HomeCards src={"/morojniy.png"} />
              </div>
          </div>
        </div>
        </Tab>
      </TabPanel>
      <TabPanel>
        <Tab>
          <div className='container mx-auto'>
          <div>
              <div className='flex items-center justify-between'>
                <HomeCards src={"/sous.png"} />
                <HomeCards src={"/sous.png"} />
                <HomeCards src={"/sous.png"} />
                <HomeCards src={"/sous.png"} />
              </div>
          </div>
        </div>
        </Tab>
      </TabPanel>
    </Tabs>
  )
}

export default ReactTabs