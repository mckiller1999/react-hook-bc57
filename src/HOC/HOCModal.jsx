import React from "react";
//HOC Hight order component: nhận vào 1 component trả về 1 class component
function HOCModal(title, Component) {
  return function () {
    return (
      <div>
        {/* <button
          type="button"
          class="btn btn-primary btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Launch
        </button> */}

        <div
          class="modal fade"
          id="modalId"
          tabindex="-1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalTitleId">
                  {title}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {/* Render Component */}
                <Component />
              </div>
            </div>
          </div>
        </div>

        <script>
          const myModal = new bootstrap.Modal(
          document.getElementById("modalId"), options, );
        </script>
      </div>
    );
  };
}

export default HOCModal;
