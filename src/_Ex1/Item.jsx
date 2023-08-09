import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faB } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import "../index.css"

import React from 'react'

export default function Item() {
  return (
    <div>
      <section className="pt-4">
        <div className="container px-lg-5">
          {/* Page Features*/}
          <div className="row gx-lg-5">
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <FontAwesomeIcon icon={faLayerGroup} />
                  </div>
                  <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                  <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <FontAwesomeIcon icon={faCloudArrowDown} />
                    </div>
                  <h2 className="fs-4 fw-bold">Free to download</h2>
                  <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <FontAwesomeIcon icon={faBook} />
                  </div>
                  <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                  <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <FontAwesomeIcon icon={faB} />
                  </div>
                  <h2 className="fs-4 fw-bold">Feature boxes</h2>
                  <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <FontAwesomeIcon icon={faCode} />
                  </div>
                  <h2 className="fs-4 fw-bold">Simple clean code</h2>
                  <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4 mb-5">
              <div className="card bg-light border-0 h-100">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  </div>
                  <h2 className="fs-4 fw-bold">A name you trust</h2>
                  <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
