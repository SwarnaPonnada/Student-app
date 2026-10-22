import { useState } from "react";

function StudentForm({ addStudent, editStudent, updateStudent }) {
  const [name, setName] = useState(editStudent?.name || "");
  const [course, setCourse] = useState(editStudent?.course || "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !course.trim()) {
      alert("Fill all fields");
      return;
    }

    const student = {
      id: editStudent ? editStudent.id : Date.now(),
      name: name.trim(),
      course: course.trim(),
    };

    if (editStudent) {
      updateStudent(student);
    } else {
      addStudent(student);
    }

    setName("");
    setCourse("");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e)=>setCourse(e.target.value)}
      />

      <button>
        {editStudent ? "Update Student" : "Add Student"}
      </button>

    </form>
  );
}

export default StudentForm;
