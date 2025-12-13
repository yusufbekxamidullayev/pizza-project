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
                <HomeCards src={"/aksiya3.png"} />
                <HomeCards src={"/aksiya2.png"} />
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
                <HomeCards src={"/pitsa1.png"}/>
                <HomeCards src={"/bodring.png"}/>
                <HomeCards src={"/sosilkali.png"}/>
                <HomeCards src={"/torttali.png"}/>
              </div>
            </div>
          </div>
        </Tab>
      </TabPanel>
      <TabPanel>
        <Tab>
          <Tab>
            <div className='container mx-auto'>
              <div>
                <div className='flex items-center justify-between'>
                  <HomeCards src={"/sushi-bg.png"} />
                  <HomeCards src={"/sushi2.png"} />
                  <HomeCards src={"/sushi3.png"} />
                  <HomeCards src={"/sushi4.png"} />
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
                <HomeCards src={"/qora.png"} />
                <HomeCards src={"/pepsi.png"} />
                <HomeCards src={"/oq-pepsi.png"} />
                <HomeCards src={"/qizil.png"} />
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
                <HomeCards src={"free.png"} />
                <HomeCards src={"kfc1.png"} />
                <HomeCards src={"lavash.png"} />
                <HomeCards src={"tovuq.png"} />
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
                <HomeCards src={"/aksiya1.png"} />
                <HomeCards src={"/aksiya3.png"} />
                <HomeCards src={"/aksiya2.png"} />
                <HomeCards src={"/aksiya.png"} />
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
                <HomeCards src={"/shkolad.png"} />
                <HomeCards src={"/somsa.png"} />
                <HomeCards src={"/oq.png"} />
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
                <HomeCards src={"/chocolate.png"} />
                <HomeCards src={"/sous.png"} />
                <HomeCards src={"/moloko.png"} />
                <HomeCards src={"/murabbo.png"} />
              </div>
          </div>
        </div>
        </Tab>
      </TabPanel>
    </Tabs>
  )
}

export default ReactTabs