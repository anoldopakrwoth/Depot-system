const toast = document.querySelector('#toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function openModal(id) {
  document.querySelector(id).classList.add('show');
}

function closeModals() {
  document.querySelectorAll('.modal-backdrop').forEach((modal) => {
    modal.classList.remove('show');
  });
}

document.querySelector('#openRecord').onclick = () => {
  openModal('#recordModal');
};

document.querySelector('#inventoryAction').onclick = () => {
  openModal('#recordModal');
};

document.querySelector('#invoiceAction').onclick = () => {
  openModal('#recordModal');
};

document.querySelector('#openUser').onclick = () => {
  openModal('#userModal');
};

document.querySelector('#productAction').onclick = () => {
  openModal('#productModal');
};

document.querySelectorAll('.close-modal').forEach((button) => {
  button.onclick = closeModals;
});

document.querySelectorAll('.modal-backdrop').forEach((modal) => {
  modal.onclick = (event) => {
    if (event.target === modal) {
      closeModals();
    }
  };
});

document.querySelector('#recordForm').onsubmit = (event) => {
  event.preventDefault();
  closeModals();
  event.target.reset();
  showToast('Record created successfully');
};

document.querySelector('#userForm').onsubmit = (event) => {
  event.preventDefault();

  const data = new FormData(event.target);

  closeModals();
  event.target.reset();
  showToast(data.get('first') + ' has been invited');
};

document.querySelector('#productForm').onsubmit = (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const productList = document.querySelector('#productList');
  const emptyMessage = productList.querySelector('p');
  const productItem = document.createElement('div');
  const productDetails = document.createElement('div');
  const productName = document.createElement('b');
  const productSummary = document.createElement('small');

  if (emptyMessage) {
    emptyMessage.remove();
  }

  productItem.className = 'user-item';
  productName.textContent = data.get('productName');
  productSummary.textContent =
    data.get('productCategory') +
    ' · ' +
    data.get('packageSize') +
    ' · ' +
    data.get('openingStock') +
    ' crates available';

  productDetails.append(productName);
  productDetails.append(productSummary);
  productItem.append(productDetails);
  productList.append(productItem);

  closeModals();
  event.target.reset();
  showToast(data.get('productName') + ' was added successfully');
};

document.querySelector('#dailyEntryForm').onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const dailyEntry = Object.fromEntries(formData.entries());
  const savedEntries = JSON.parse(
    localStorage.getItem('dailyEntries') || '[]'
  );

  dailyEntry.savedAt = new Date().toISOString();
  savedEntries.push(dailyEntry);

  localStorage.setItem('dailyEntries', JSON.stringify(savedEntries));

  event.target.reset();
  showToast('Daily entry saved successfully');
};

document.querySelectorAll('.side-group button').forEach((button) => {
  button.onclick = () => {
    button.parentElement.classList.toggle('open');
  };
});
