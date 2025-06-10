function showModal(name, messageHTML) {
      document.getElementById('friendName').textContent = name;
      document.getElementById('message').innerHTML = messageHTML;
      document.getElementById('modal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
      document.getElementById('message').innerHTML = '';
    }

    window.onclick = function(e) {
      if (e.target.id === 'modal') {
        closeModal();
      }
    }