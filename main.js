function playSound(e) {
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if (!audio) return;	// not necessary key
		audio.currentTime = 0; // rewind to the start
		audio.play();
		key.classList.add('playing');
}
	
function removeTransition(e) {
		if (e.propertyName !== 'transform') return; // skip it's not a transform
		this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// обработчики событий мыши

const key65 = document.getElementById('65');
key65.onclick = function () {
	const audio = document.querySelector('audio[data-key="65"]');
	const key = document.querySelector('.key[data-key="65"]');
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

const key83 = document.getElementById('83');
key83.onclick = function () {
	const audio = document.querySelector('audio[data-key="83"]');
	const key = document.querySelector('.key[data-key="83"]');
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

const key68 = document.getElementById('68');
key68.onclick = function () {
	const audio = document.querySelector('audio[data-key="68"]');
	const key = document.querySelector('.key[data-key="68"]');
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

const key70 = document.getElementById('70');
key70.onclick = function () {
	const audio = document.querySelector('audio[data-key="70"]');
	const key = document.querySelector('.key[data-key="70"]');
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

const key71 = document.getElementById('71');
key71.onclick = function () {
	const audio = document.querySelector('audio[data-key="71"]');
	const key = document.querySelector('.key[data-key="71"]');
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

const key72 = document.getElementById('72');
key72.onclick = function () {
	const audio = document.querySelector('audio[data-key="72"]');
	const key = document.querySelector('.key[data-key="72"]');
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

const key74 = document.getElementById('74');
key74.onclick = function () {
	const audio = document.querySelector('audio[data-key="74"]');
	const key = document.querySelector('.key[data-key="74"]');
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

const key75 = document.getElementById('75');
key75.onclick = function () {
	const audio = document.querySelector('audio[data-key="75"]');
	const key = document.querySelector('.key[data-key="75"]');
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

const key76 = document.getElementById('76');
key76.onclick = function () {
	const audio = document.querySelector('audio[data-key="76"]');
	const key = document.querySelector('.key[data-key="76"]');
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}