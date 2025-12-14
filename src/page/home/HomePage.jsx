import ReactTabs from '../../companents/react-tabs/ReactTabs'
import PizzaCard from '../../companents/pizza-card/PizzaCard'
import HomeComponent from '../../companents/home/HomeComponent'

function HomePage() {

  return (
    // <div className='container mx-auto'>
    //   <ReactTabs />
    //   <div>
    //     <div className='flex  items-center justify-between py-8'>
    //       <h1 className='text-[40px] text-[#191919] font-semibold'>Пицца</h1>
    //       <div className='flex items-center gap-1 border-[1px] border-[#F0F0F0] w-[115px] h-[35px] justify-center rounded-[6px] hover:bg-[#F9F9F9] duration-300'>
    //         <img src="/Filter.png" alt="" />
    //         <p className='text-[16px] text-[#000000]'>Фильтры</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='flex items-center justify-between'>
    //     <PizzaCard src={"/bodring.png"} title={"Чикен Сладкий Чили"} subtitle={"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу..."} price={"от 399 ₽"} />
    //     <PizzaCard src={"/sosilkali.png"} title={"EASY PEASY огуречный расколбас"} subtitle={"Курица, Лук, Перец Халапеньо..."} price={"от 549 ₽"} />
    //     <PizzaCard src={"/pitsa1.png"} title={"EASY PEASY чикен а-ля хрен пицца"} subtitle={"Курица, Лук, Соус Карбонара,..."} price={"от 249 ₽"} />
    //     <PizzaCard src={"/torttali.png"} title={"4 сезона"} subtitle={"Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари..."} price={"от 630 ₽"} />
    //   </div>
    //   <div className='flex items-center justify-between pt-8'>
    //     <PizzaCard src={"/torttali.png"} title={"4 сезона"} subtitle={"Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари..."} price={"от 630 ₽"} />
    //     <PizzaCard src={"/pitsa1.png"} title={"EASY PEASY чикен а-ля хрен пицца"} subtitle={"Курица, Лук, Соус Карбонара,..."} price={"от 249 ₽"} />
    //     <PizzaCard src={"/bodring.png"} title={"Чикен Сладкий Чили"} subtitle={"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу..."} price={"от 399 ₽"} />
    //     <PizzaCard src={"/sosilkali.png"} title={"EASY PEASY огуречный расколбас"} subtitle={"Курица, Лук, Перец Халапеньо..."} price={"от 549 ₽"} />
    //   </div>
    //   <div className='flex  items-center justify-between py-8'>
    //     <h1 className='text-[40px] text-[#191919] font-semibold'>Суши</h1>
    //     <div className='flex items-center gap-1 border-[1px] border-[#F0F0F0] w-[115px] h-[35px] justify-center rounded-[6px] hover:bg-[#F9F9F9] duration-300'>
    //       <img src="/Filter.png" alt="" />
    //       <p className='text-[16px] text-[#000000]'>Фильтры</p>
    //     </div>
    //   </div>
    //   <div className='flex items-center justify-between'>
    //     <PizzaCard src={"/sushi-bg.png"} title={"Филадельфия кранч"} subtitle={"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип..."} price={"475 ₽"} />
    //     <PizzaCard src={"/sushi2.png"} title={"Филадельфия крем-брюле"} subtitle={"Сливочный сыр, семга татаки с тростниковым сахаром, соус у..."} price={"395 ₽"} />
    //     <PizzaCard src={"/sushi3.png"} title={"Супер Филадельфия"} subtitle={"Действительно много семги, сливочный сыр, огурец, рис, н..."} price={"425 ₽"} />
    //     <PizzaCard src={"/sushi4.png"} title={"Тигр мама"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //   </div>
    //   <div className='flex items-center justify-between pt-8'>
    //     <PizzaCard src={"/sushi4.png"} title={"Тигр мама"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //     <PizzaCard src={"/sushi3.png"} title={"Супер Филадельфия"} subtitle={"Действительно много семги, сливочный сыр, огурец, рис, н..."} price={"425 ₽"} />
    //     <PizzaCard src={"/sushi-bg.png"} title={"Филадельфия кранч"} subtitle={"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип..."} price={"475 ₽"} />
    //     <PizzaCard src={"/sushi2.png"} title={"Филадельфия крем-брюле"} subtitle={"Сливочный сыр, семга татаки с тростниковым сахаром, соус у..."} price={"395 ₽"} />
    //   </div>
    //   <div className='flex  items-center justify-between py-8'>
    //     <h1 className='text-[40px] text-[#191919] font-semibold'>Закуски</h1>

    //   </div>
    //   <div className='flex items-center justify-between'>
    //     <PizzaCard src={"/free.png"} title={"Филадельфия кранч"} subtitle={"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип..."} price={"475 ₽"} />
    //     <PizzaCard src={"/tovuq.png"} title={"Филадельфия крем-брюле"} subtitle={"Сливочный сыр, семга татаки с тростниковым сахаром, соус у..."} price={"395 ₽"} />
    //     <PizzaCard src={"/kfc1.png"} title={"Супер Филадельфия"} subtitle={"Действительно много семги, сливочный сыр, огурец, рис, н..."} price={"425 ₽"} />
    //     <PizzaCard src={"/lavash.png"} title={"Тигр мама"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //   </div>
    //   <div className='flex items-center justify-between pt-8'>
    //     <PizzaCard src={"/lavash.png"} title={"Тигр мама"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //     <PizzaCard src={"/kfc1.png"} title={"Супер Филадельфия"} subtitle={"Действительно много семги, сливочный сыр, огурец, рис, н..."} price={"425 ₽"} />
    //     <PizzaCard src={"/bodring.png"} title={"Чикен Сладкий Чили"} subtitle={"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу..."} price={"от 399 ₽"} />
    //     <PizzaCard src={"/bodring.png"} title={"Чикен Сладкий Чили"} subtitle={"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу..."} price={"от 399 ₽"} />
    //   </div>
    //   <div className='flex  items-center justify-between py-8'>
    //     <h1 className='text-[40px] text-[#191919] font-semibold'>Десерты</h1>

    //   </div>
    //   <div className='flex items-center justify-between'>
    //     <PizzaCard src={"/somsa.png"} title={"Филадельфия кранч"} subtitle={"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип..."} price={"475 ₽"} />
    //     <PizzaCard src={"/bulochka.png"} title={"Филадельфия крем-брюле"} subtitle={"Сливочный сыр, семга татаки с тростниковым сахаром, соус у..."} price={"395 ₽"} />
    //     <PizzaCard src={"/pankie.png"} title={"Супер Филадельфия"} subtitle={"Действительно много семги, сливочный сыр, огурец, рис, н..."} price={"425 ₽"} />
    //     <PizzaCard src={"/morojniy.png"} title={"Тигр мама"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //   </div>
    //   <div className='flex items-center justify-between pt-8'>
    //     <PizzaCard src={"/morojniy.png"} title={"Тигр мама"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //     <PizzaCard src={"/shkolad.png"} title={"Филадельфия крем-брюле"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //     <PizzaCard src={"/oq.png"} title={"Филадельфия кранч"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //     <PizzaCard src={"/pankie.png"} title={"Супер Филадельфия"} subtitle={"Действительно много семги, сливочный сыр, огурец, рис, н..."} price={"425 ₽"} />
    //   </div>
    //   <div className='flex  items-center justify-between py-8'>
    //     <h1 className='text-[40px] text-[#191919] font-semibold'>Напитки</h1>

    //   </div>
    //   <div className='flex items-center justify-between'>
    //     <PizzaCard src={"/adrenaline.png"} title={"Филадельфия кранч"} subtitle={"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип..."} price={"475 ₽"} />
    //     <PizzaCard src={"/qora.png"} title={"Филадельфия крем-брюле"} subtitle={"Сливочный сыр, семга татаки с тростниковым сахаром, соус у..."} price={"395 ₽"} />
    //     <PizzaCard src={"/pepsi.png"} title={"Супер Филадельфия"} subtitle={"Действительно много семги, сливочный сыр, огурец, рис, н..."} price={"425 ₽"} />
    //     <PizzaCard src={"/qizil.png"} title={"Тигр мама"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //   </div>
    //   <div className='flex items-center justify-between pt-8'>
    //     <PizzaCard src={"/oq-pepsi.png"} title={"Тигр мама"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //     <PizzaCard src={"/mirinda.png"} title={"Филадельфия крем-брюле"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //     <PizzaCard src={"/adrenaline.png"} title={"Филадельфия кранч"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //     <PizzaCard src={"/qora.png"} title={"Супер Филадельфия"} subtitle={"Действительно много семги, сливочный сыр, огурец, рис, н..."} price={"425 ₽"} />
    //   </div>
    //   <div className='flex  items-center justify-between py-8'>
    //     <h1 className='text-[40px] text-[#191919] font-semibold'>Напитки</h1>
    //   </div>
    //   <div className='flex items-center justify-between'>
    //     <PizzaCard src={"/moloko.png"} title={"Филадельфия кранч"} price={"475 ₽"} />
    //     <PizzaCard src={"/chocolate.png"} title={"Филадельфия крем-брюле"} price={"475 ₽"} />
    //     <PizzaCard src={"/sous.png"} title={"Супер Филадельфия"} price={"475 ₽"} />
    //     <PizzaCard src={"/murabbo.png"} title={"Тигр мама"} price={"475 ₽"} />
    //   </div>
    //   <div className='flex items-center justify-between pt-8'>
    //     <PizzaCard src={"/chocolate.png"} title={"Филадельфия крем-брюле"} price={"475 ₽"} />
    //     <PizzaCard src={"/murabbo.png"} title={"Тигр мама"} price={"475 ₽"} />
    //     <PizzaCard src={"/sous.png"} title={"Супер Филадельфия"} price={"475 ₽"} />
    //     <PizzaCard src={"/moloko.png"} title={"Филадельфия кранч"} price={"475 ₽"} />
    //   </div>
    //   <div className='flex  items-center justify-between py-8'>
    //     <h1 className='text-[40px] text-[#191919] font-semibold'>Комбо</h1>
    //   </div>
    //   <div className='flex items-center justify-between'>
    //     <PizzaCard src={"/aksiya.png"} title={"Филадельфия кранч"} subtitle={"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип..."} price={"475 ₽"} />
    //     <PizzaCard src={"/aksiya2.png"} title={"Филадельфия крем-брюле"} subtitle={"Сливочный сыр, семга татаки с тростниковым сахаром, соус у..."} price={"395 ₽"} />
    //     <PizzaCard src={"/aksiya1.png"} title={"Супер Филадельфия"} subtitle={"Действительно много семги, сливочный сыр, огурец, рис, н..."} price={"425 ₽"} />
    //     <PizzaCard src={"/aksiya3.png"} title={"Тигр мама"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //   </div>
    //   <div className='flex items-center justify-between pt-8'>
    //     <PizzaCard src={"/aksiya2.png"} title={"Тигр мама"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //     <PizzaCard src={"/aksiya.png"} title={"Филадельфия кранч"} subtitle={"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип..."} price={"475 ₽"} />
    //     <PizzaCard src={"/aksiya3.png"} title={"Тигр мама"} subtitle={"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик..."} price={"525 ₽"} />
    //     <PizzaCard src={"/aksiya1.png"} title={"Супер Филадельфия"} subtitle={"Действительно много семги, сливочный сыр, огурец, рис, н..."} price={"425 ₽"} />
    //   </div>
    //   <div>
    //     <div className='flex flex-col items-center'>
    //       <h1 className='pt-15 text-[32px] text-[#191919] text-center font-semibold'>Доставка пиццы в Москве</h1>
    //       <p className='pt-4 text-[17px] text-[#191919]  w-[840px]'>Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.</p>
    //       <p className='pt-6 text-[17px] text-[#191919]  w-[840px]'>Как сделать заказ
    //         Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!</p>
    //     </div>
    //   </div>

    // </div>
    <section>
      <div className='container mx-auto'>
        <div>
          <HomeComponent/>
        </div>
      </div>
    </section>
  )
}

export default HomePage