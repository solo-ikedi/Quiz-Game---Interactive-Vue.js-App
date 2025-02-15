<template>
  <div class="drag-drop-quiz-container">
    <h1>Upload & Drag & Drop Quiz</h1>

    <!-- File Upload Section -->
    <input type="file" @change="handleFileUpload" multiple accept="image/*, .pdf, .txt" />

    <!-- Draggable Uploaded Items -->
    <div class="options">
      <div 
        v-for="(file, index) in uploadedFiles" 
        :key="index" 
        draggable="true" 
        @dragstart="dragStart(index)">
        {{ file.name }}
      </div>
    </div>

    <!-- Drop Zone -->
    <div class="drop-zone" @dragover.prevent @drop="dropItem">
      Drop here
    </div>

    <!-- Navigation -->
    <div class="navigation">
      <router-link to="/multiple-choice" class="nav-button">Back</router-link>
      <router-link to="/results" class="nav-button">Next</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedFiles: [],  // Stores uploaded files
      draggedItem: null,
    };
  },
  methods: {
    // Handle File Upload
    handleFileUpload(event) {
      const files = event.target.files;
      this.uploadedFiles = [...this.uploadedFiles, ...Array.from(files)];
    },
    
    // Drag Start
    dragStart(index) {
      this.draggedItem = this.uploadedFiles[index];
    },

    // Drop Item
    dropItem() {
      if (this.draggedItem) {
        alert(`You dropped: ${this.draggedItem.name}`);
      }
    },
  },
};
</script>

<style>
.drag-drop-quiz-container {
  text-align: center;
  margin-top: 50px;
}
input[type="file"] {
  margin-bottom: 20px;
}
.options div {
  margin: 10px;
  padding: 10px;
  background: lightgray;
  cursor: grab;
}
.drop-zone {
  margin-top: 20px;
  padding: 30px;
  border: 2px dashed gray;
}
.navigation {
  margin-top: 20px;
}
.nav-button {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
