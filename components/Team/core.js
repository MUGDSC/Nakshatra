import classes from "./core.module.css"
import Info from "./info";

let mentors = [
  {
    image: "AtharvaMaheshwari",
    name: "Atharva Maheshwari",
    designation: "Operation Head"
  }, {
    image: "KhushangDosi",
    name: "Khushang Dosi",
    designation: "Corporate & PR Head"
  }, {
    image: "NandiniMalviya",
    name: "Nandini Malviya",
    designation: "Content & Design Head"
  }, {
    image: "RitikTailor",
    name: "Ritik Tailor",
    designation: "Technical Head"
  }
]

export default function core() {
  return (
    <section>
      <div className={classes.section_h}>Core</div>
      <div className={classes.grid_container}>
        {
          mentors.map((e, index) => {
            return (
              <Info name={e.name} designation={e.designation} image={e.image} key={index} />
            );
          })
        }
      </div>


    </section>
  )
}