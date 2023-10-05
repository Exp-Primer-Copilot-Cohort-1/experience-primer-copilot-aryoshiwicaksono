function skillsMember() {
    var member = document.getElementById('member');
    var memberSkills = document.getElementById('memberSkills');
    var memberSkillsButton = document.getElementById('memberSkillsButton');
    var memberSkillsClose = document.getElementById('memberSkillsClose');
  
    memberSkillsButton.addEventListener('click', function() {
      memberSkills.classList.add('active');
      member.classList.add('active');
    });
  
    memberSkillsClose.addEventListener('click', function() {
      memberSkills.classList.remove('active');
      member.classList.remove('active');
    });
  }