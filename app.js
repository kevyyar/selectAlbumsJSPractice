let albums = document.querySelectorAll('.album')
let saveBtn = document.querySelector('.button')
let notification = document.querySelector('.notify')
let itemsTotal = document.querySelector('.items-total')
let albumsSelected = []

// loop through every album
let i = 0
while (i < albums.length) {
	albums[i].onclick = function (e) {
		let albumTitle = this.querySelector('.title').textContent
		// Check if album has 'selected' class
		if (this.classList.contains('selected') !== true) {
			this.classList.add('selected')
			albumsSelected.push(albumTitle)
		} else {
			this.classList.remove('selected')
			albumsSelected = albumsSelected.filter(function (item) {
				return item !== albumTitle
			})
		}
	}
	i++
}

function notifyUser() {
	itemsTotal.textContent = `${albumsSelected.length} items saved`
	notification.classList.add('active')

	setTimeout(function () {
		notification.classList.remove('active')
	}, 2000)
}

saveBtn.addEventListener('click', notifyUser)
