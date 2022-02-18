'use strict';

const skillHeader = document.querySelector('.skill-header');
const softskillBtn = document.querySelector('.softskill-btn');
const techskillBtn = document.querySelector('.techskill-btn');
const toolsBtn = document.querySelector('.tools-btn');
const techSkillShow = document.querySelector('.techSkillShow');
const softSkillShow = document.querySelector('.softSkillShow');
const toolsShow = document.querySelector('.toolsShow');

const displayMessage = function (message) {
	skillHeader.textContent = message;
};

softskillBtn.addEventListener('click', function () {
	displayMessage('Soft Skill');
	softSkillShow.classList.remove('hidden');
	techSkillShow.classList.add('hidden');
	toolsShow.classList.add('hidden');
});

techskillBtn.addEventListener('click', function () {
	displayMessage('Technical Skills');
	techSkillShow.classList.remove('hidden');
	softSkillShow.classList.add('hidden');
	toolsShow.classList.add('hidden');
});

toolsBtn.addEventListener('click', function () {
	displayMessage('Tools');
	toolsShow.classList.remove('hidden');
	techSkillShow.classList.add('hidden');
	softSkillShow.classList.add('hidden');
});
