class Student {
    constructor(id, name, gender, dob, hometown) {
      this.id = id;
      this.name = name;
      this.gender = gender;
      this.dob = dob;
      this.hometown = hometown;
    }
  }
  
  class StudentManager {
    constructor() {
      this.students = JSON.parse(localStorage.getItem('students')) || [];
      this.displayStudents();
    }
  
    displayStudents() {
      const tableBody = document.querySelector('#studentTable tbody');
      tableBody.innerHTML = '';
      this.students.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.gender}</td>
          <td>${student.dob}</td>
          <td>${student.hometown}</td>
          <td>
            <button class="edit" onclick="editStudent('${student.id}')">Sửa</button>
            <button class="delete" onclick="deleteStudent('${student.id}')">Xóa</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    addStudent(student) {
      this.students.push(student);
      this.saveData();
      this.displayStudents();
    }
  
    updateStudent(updatedStudent) {
      const index = this.students.findIndex(student => student.id === updatedStudent.id);
      if (index !== -1) {
        this.students[index] = updatedStudent;
        this.saveData();
        this.displayStudents();
      }
    }
  
    deleteStudent(id) {
      this.students = this.students.filter(student => student.id !== id);
      this.saveData();
      this.displayStudents();
    }
  
    saveData() {
      localStorage.setItem('students', JSON.stringify(this.students));
    }
  }
  
  const studentManager = new StudentManager();
  
  document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const id = document.getElementById('studentId').value || Date.now().toString();
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const hometown = document.getElementById('hometown').value;
  
    const student = new Student(id, name, gender, dob, hometown);
  
    if (document.getElementById('studentId').value) {
      studentManager.updateStudent(student);
    } else {
      studentManager.addStudent(student);
    }
  
    document.getElementById('studentForm').reset();
    document.getElementById('studentId').value = '';
  });
  
  function editStudent(id) {
    const student = studentManager.students.find(s => s.id === id);
    if (student) {
      document.getElementById('studentId').value = student.id;
      document.getElementById('name').value = student.name;
      document.getElementById('gender').value = student.gender;
      document.getElementById('dob').value = student.dob;
      document.getElementById('hometown').value = student.hometown;
    }
  }
  
  function deleteStudent(id) {
    if (confirm('Bạn có chắc muốn xóa sinh viên này?')) {
      studentManager.deleteStudent(id);
    }
  }
  