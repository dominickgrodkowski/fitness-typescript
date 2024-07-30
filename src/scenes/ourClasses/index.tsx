import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Unlock your strength potential with our comprehensive weight training classes at Evogym. Our expert trainers will guide you through a variety of exercises designed to build muscle, increase endurance, and boost overall fitness. Whether you're lifting for the first time or looking to perfect your technique, our classes cater to all skill levels. Join us to achieve your strength goals and transform your body with tailored workouts that challenge and inspire.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
    "Find your balance and inner peace with our rejuvenating yoga classes at Evogym. Our experienced instructors will guide you through a series of poses and breathing exercises designed to enhance flexibility, strength, and mindfulness. Whether you're a beginner looking to learn the basics or an experienced yogi seeking to deepen your practice, our classes cater to all levels. Join us to relax, unwind, and discover the transformative power of yoga.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core and achieve a toned midsection with our dynamic Ab Core Classes at Evogym. Our expert trainers will lead you through targeted exercises that focus on building core strength, improving stability, and enhancing overall fitness. Perfect for all fitness levels, these classes are designed to challenge and motivate you to reach your goals. Join us to sculpt your abs, improve your posture, and boost your confidence with every workout.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Take your fitness journey to new heights with our exhilarating Adventure Classes at Evogym. Designed for those who crave excitement and variety, these classes combine fun and fitness in unique ways. From obstacle courses and outdoor workouts to team challenges and fitness excursions, our adventure classes will push your limits and ignite your passion for exercise. Perfect for all fitness levels, these classes offer a refreshing break from routine and an opportunity to discover new strengths. Join us for an adventure that will inspire, challenge, and transform you.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
    "Elevate your workout routine with our diverse range of Fitness Classes at Evogym. Whether you're aiming to improve your cardiovascular health, build strength, or enhance flexibility, our classes are designed to meet your needs and keep you motivated. Led by experienced and passionate trainers, each session offers a fun and supportive environment where you can push your limits and achieve your fitness goals. Join us and discover the perfect class to match your fitness journey, from high-intensity interval training to calming yoga sessions.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Transform your fitness routine with our dynamic Training Classes at Evogym. Designed to cater to all levels, our classes focus on building strength, improving endurance, and enhancing overall fitness. With a variety of training methods, including circuit training, functional fitness, and personalized coaching, our expert trainers are here to guide you every step of the way. Experience a motivating and supportive environment where you can push your boundaries, achieve your goals, and enjoy every workout. Join us and take the first step towards a stronger, healthier you.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            At Evogym, we offer a diverse range of classes designed to fit every fitness level and interest. Our expert trainers lead sessions that are not only challenging but also fun and motivating. Here are some of the classes we offer:
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;