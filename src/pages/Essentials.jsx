import React from 'react';
import Navbar from '../components/Navbar';
import './Essentials.css';

const Essentials = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className="card">
          <div className="SchoolSupplies">
            <h2>School Supplies</h2>
          </div>
          <div className="list">
            <h3>List of Resources:</h3>
            <ul className="resources">
              <li>
                <a href="https://openstax.org/"><strong>OpenStax</strong></a>
                <p>
                  OpenStax stands as a nonprofit endeavor by Rice University,
                  dedicated to education. It holds the distinction of being the
                  largest global distributor of freely accessible educational
                  materials. OpenStax has contributed to saving students a total
                  of $2.9 billion in educational expenses since 2012. This
                  concerted effort reflects our steadfast pledge to crafting a
                  future where every student can access the necessary resources to
                  fulfill their educational aspirations.
                </p>
              </li>
              <li>
              <a href="https://open.umn.edu/opentextbooks"
                ><strong>Open Source Textbooks</strong></a
              >
              <p>
                Embark on an enriching journey of knowledge exploration with our
                extensive collection of open textbooks, generously available for
                free on this website! Dive into a realm where learning knows no
                bounds as you download, customize, and share these invaluable
                resources, all without incurring any financial burden. Embrace
                the spirit of collaboration and empowerment as you engage with
                these open textbooks, shaping them to suit your unique
                educational needs and amplifying their impact across communities
                far and wide.
              </p>
            </li>
            <li>
              <a href="https://archive.org/"
                ><strong>Internet Archive</strong></a
              >
              <p>
                The Internet Archive stands is a non-profit repository teeming
                with an extensive collection of millions of treasures: from
                boundless volumes of literature to captivating cinematic
                experiences, from innovative software to melodious symphonies,
                and from historical websites to a diverse collection of digital
                artifacts. It gives students the opportunity to explore culture
                and media, free of charge.
              </p>
            </li>
            <li>
              <a href="https://www.codecademy.com/student-center"
                ><strong>Codeacademy</strong></a
              >
              <p>
                Codecademy emerges as an invaluable resource for individuals
                seeking to master coding skills at their own pace. Additionally,
                for those desiring more immersive tutorials and comprehensive
                lessons, Codecademy Pro presents an enticing option, with a
                generous 35% discount extended to students.
              </p>
            </li>
            <li>
              <a href="https://www.wolframalpha.com/"
                ><strong>WolframAlpha</strong></a
              >
              <p>
                Wolfram Alpha, a computational knowledge engine, offers college
                students a comprehensive suite of tools to enhance their
                academic endeavors. Through its vast database and computational
                prowess, students can access instant answers and solutions to
                complex queries across various disciplines, from mathematics and
                science to economics and beyond. Additionally, it provides
                interactive visualizations, step-by-step problem-solving
                guidance, and personalized study aids, empowering students to
                deepen their understanding and excel in their coursework.
              </p>
            </li>
            <li>
              <a href="https://www.adobe.com/creativecloud/buy/students.html"
                ><strong>Adobe</strong></a
              >
              <p>
                Unlock the realm of creative possibilities with Adobe's enticing
                student discounts, slashing prices by up to 60% on their
                acclaimed Adobe Creative Cloud suite. This generous offer
                provides students with an accessible avenue to nurture and
                refine their graphic design and media prowess without breaking
                the bank. Additionally, some forward-thinking universities
                extend this invaluable resource to their students completely
                free of charge, so be sure to consult your administration to
                seize this golden opportunity.
              </p>
            </li>
            <li>
              <a href="https://www.microsoft.com/en-us/store/b/education"
                ><strong>Microsoft</strong></a
              >
              <p>
                Microsoft has an array of enticing discounts tailored for
                students, ranging from a generous 50% off Office 365 Personal to
                enticing savings of up to 10% on select items. Furthermore,
                students can uncover additional discounts at certain university
                bookstores, providing even more opportunities to secure the best
                deals for their technological necessities. Don't miss out on
                maximizing your savings; always explore and compare prices to
                ensure you're getting the most value for your tech investments.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section class="card">
        <div class="Meals">
          <h2>Meal Planning</h2>
        </div>
        <div class="list">
          <h3>List of Resources:</h3>
          <ul class="resources">
            <li>
              <a href="https://www.budgetbytes.com/"
                ><strong>Budget Bytes</strong></a
              >
              <p>
                Budget Bytes is a culinary haven that equips users with
                budget-friendly recipes, cooking tips, and meal planning
                strategies to help them create delicious and nutritious meals
                without breaking the bank. Through its user-friendly platform,
                individuals can explore a vast collection of recipes, each
                meticulously crafted to balance affordability and flavor. With
                its practical approach to cooking on a budget, Budget Bytes
                empowers users to unleash their culinary creativity while
                keeping their wallets happy.
              </p>
            </li>
            <li>
              <a
                href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://books.leannebrown.com/good-and-cheap.pdf"
                ><strong>Good and Cheap</strong></a
              >
              <p>
                "Good and Cheap" is a valuable resource created by Leanne Brown,
                designed to empower individuals to cook nutritious meals on a
                budget without compromising on taste or quality. In addition to
                offering a variety of budget-friendly recipes, it provides
                insightful tips and strategies to help users make the most of
                their ingredients and culinary resources, making wholesome
                cooking accessible to all. Whether you're a novice in the
                kitchen or a seasoned chef looking to save, this resource is a
                fantastic tool for anyone seeking to eat well without
                overspending.
              </p>
            </li>
            <li>
              <a href="https://www.blueapron.com/"
                ><strong>Blue Apron</strong></a
              >
              <p>
                Blue Apron is a meal kit delivery service that provides
                customers with pre-portioned ingredients and chef-designed
                recipes, delivered straight to their doorstep. With Blue Apron,
                users can enjoy the convenience of cooking delicious meals at
                home without the hassle of grocery shopping or meal planning.
                Their diverse menu options cater to various dietary preferences
                and skill levels, making it easy for anyone to whip up gourmet
                meals in their own kitchen.
              </p>
            </li>
            <li>
              <a
                href="https://help.doordash.com/consumers/s/article/DashPass-for-Students?language=en_US"
                ><strong>DoorDash</strong></a
              >
              <p>
                DoorDash for students offers convenience, flexibility, and
                variety by allowing students to order food from their favorite
                restaurants and have it delivered directly to their door, saving
                them time and effort. With busy schedules and limited cooking
                facilities, DoorDash provides a convenient solution for students
                to access a wide range of cuisines without leaving their campus
                or dormitory. Additionally, many restaurants offer student
                discounts or promotions through the DoorDash platform, making it
                an affordable option for budget-conscious students.
              </p>
            </li>
            <li>
              <a href="https://www.toogoodtogo.com/en-us"
                ><strong>Too Good To Go</strong></a
              >
              <p>
                Too Good To Go offers a sustainable solution to combat food
                waste by connecting users with surplus food from local
                restaurants and stores at discounted prices. This platform
                empowers individuals to make a positive environmental impact
                while enjoying affordable meals and snacks. By rescuing
                perfectly edible food that would otherwise go to waste, Too Good
                To Go promotes sustainability and fosters a sense of community
                engagement in reducing food waste.
              </p>
            </li>
            <li>
              <a href="https://www.traderjoes.com/home"
                ><strong>Trader Joe's</strong></a
              >
              <p>
                Trader Joe's is ideal for college students due to its affordable
                prices, diverse product selection, and convenient locations near
                many campuses. With a wide array of budget-friendly options
                ranging from fresh produce to ready-to-eat meals, students can
                easily find nutritious and delicious food to fit their busy
                lifestyles. Additionally, Trader Joe's often offers unique and
                innovative products, making grocery shopping an exciting and
                enjoyable experience for students looking to explore new flavors
                and culinary creations.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section class="card">
        <div class="Healthcare">
          <h2>Healthcare</h2>
        </div>
        <div class="list">
          <h3>Medical Resources:</h3>
          <ul class="resources">
            <li>
              <a href="https://www.onemedical.com/"
                ><strong>One Medical</strong></a
              >
              <p>
                One Medical is an excellent choice for students due to its
                student discounts and prime deals, providing affordable access
                to high-quality healthcare services. With convenient locations
                and easy appointment scheduling, students can efficiently manage
                their healthcare needs while juggling their academic
                responsibilities. Additionally, One Medical's focus on
                personalized care and comprehensive services ensures that
                students receive the attention and support they need to stay
                healthy and thrive during their college years.
              </p>
            </li>
            <li>
              <a
                href="https://www.healthcare.gov/young-adults/college-students/"
                ><strong>HealthCare.gov</strong></a
              >
              <p>
                Healthcare.gov is a valuable resource for college students
                because it provides comprehensive information and assistance
                regarding health insurance options tailored to their needs. By
                offering guidance on navigating the complexities of healthcare
                coverage, students can make informed decisions about their
                insurance, ensuring they have access to essential medical
                services while in school. Additionally, Healthcare.gov often
                features resources and tools specifically designed for young
                adults, empowering students to take charge of their health and
                well-being as they pursue their academic goals.
              </p>
            </li>
            <li>
              <a href="https://www.goodrx.com/care"
                ><strong>GoodRx Care</strong></a
              >
              <p>
                GoodRx Care is an invaluable resource for students because it
                offers affordable and accessible telehealth services, allowing
                them to receive medical care conveniently from the comfort of
                their own space. With transparent pricing and discounts on
                prescriptions, GoodRx Care helps students save money on
                healthcare expenses. Additionally, its user-friendly platform
                and streamlined process make it easy for students to connect
                with healthcare providers and address their medical concerns
                promptly, promoting overall well-being and academic success.
              </p>
            </li>
            <li>
              <a
                href="https://www.nurx.com/?_gl=1*p8g39l*_up*MQ..&gclid=CjwKCAjwxLKxBhA7EiwAXO0R0DKnVhzxvW1e9bCF7MLaANICxVbE3lOTz2FGzCAex0mNg2zNly6lEBoC8M0QAvD_BwE"
                ><strong>Nurx</strong></a
              >
              <p>
                Nurx is a fantastic resource for students seeking birth control,
                acne medication, dermatological treatments, or mental health
                care due to its convenient and confidential telemedicine
                services. With Nurx, students can access healthcare
                professionals, receive prescriptions, and have medications
                delivered discreetly to their doorstep, eliminating the need for
                in-person visits and reducing potential barriers to care. This
                streamlined process saves time, ensures privacy, and promotes
                overall well-being, empowering students to prioritize their
                health while managing their academic responsibilities
                effectively.
              </p>
            </li>
            <li>
              <a
                href="https://www.betterhelp.com/get-started/?go=true&utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=counseling+families_b&utm_content=134506249425&network=g&placement=&target=&matchtype=b&utm_campaign=16718352460&ad_type=text&adposition=&kwd_id=kwd-297055262103&gad_source=1&gclid=CjwKCAjwxLKxBhA7EiwAXO0R0FAtHoyqrSTgD4p-qwUBNTEZ4AkHQj3YKh0PAPRNPbtFjlsRX7t29BoC6VQQAvD_BwE&not_found=1&gor=start"
                ><strong>BetterHelp</strong></a
              >
              <p>
                BetterHelp is an excellent website for students because it
                offers accessible and confidential online counseling services,
                providing support for a wide range of mental health concerns.
                With BetterHelp, students can connect with licensed therapists
                through secure video calls, phone sessions, or messaging, making
                it convenient to seek help anytime and anywhere. Additionally,
                BetterHelp's flexible scheduling and affordable pricing options
                cater to the unique needs and budget constraints of students,
                promoting mental wellness and academic success. However, check
                with your university for free counseling services!
              </p>
            </li>
          </ul>
        </div>
      </section>
      </main>
    </div>
  );
};

export default Essentials;
