new Vue({
  el: '#notebook',
  data() {
    return {
      notes: JSON.parse(localStorage.getItem('notes')) || [],
      selectedId: localStorage.getItem('selected-id') || null
    }
  },
  methods: {
    addNote() {
      const time = Date.now()
      const note = {
        id: String(time),
        title: 'New note ' + (this.notes.length + 1),
        content:
          '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
        created: time,
        favorite: false
      }
      this.notes.push(note)
    },
    selectNote(note) {
      this.selectedId = note.id
    },
    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes))
      console.log('Notes saved!', new Date())
    },
    removeNote() {
      if (this.selectedNote && confirm('Delete the note?')) {
        const index = this.notes.indexOf(this.selectedNote)
        if (index !== -1) {
          this.notes.splice(index, 1)
        }
      }
    },
    favoriteNote() {
      this.selectedNote.favorite = !this.selectedNote.favorite
    }
  },
  computed: {
    notePreview() {
      return this.selectedNote ? marked(this.selectedNote.content) : ''
    },
    selectedNote() {
      return this.notes.find(note => note.id === this.selectedId)
    },
    sortedNotes() {
      return this.notes
        .slice()
        .sort((a, b) => a.created - b.created)
        .sort((a, b) => (a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1))
    },
    linesCount() {
      if (this.selectedNote) {
        return this.selectedNote.content.split(/\r\n|\r|\n/).length
      }
    },
    wordsCount() {
      if (this.selectedNote) {
        let s = this.selectedNote.content
        s = s.replace(/\n/g, ' ')
        s = s.replace(/(^\s*)|(\s*$)/gi, '')
        s = s.replace(/\s\s+/gi, ' ')
        return s.split(' ').length
      }
    },
    charactersCount() {
      if (this.selectedNote) {
        return this.selectedNote.content.split('').length
      }
    }
  },
  watch: {
    notes: {
      handler: 'saveNotes',
      deep: true
    },
    selectedId(val) {
      localStorage.setItem('selected-id', val)
    }
  },
  filters: {
    date(time) {
      return moment(time).format('DD/MM/YY, HH:mm')
    }
  }
})
