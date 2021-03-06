// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if statement defines what license was used
  if (license === "MIT"){
    // returns a clickable license badge with a link to the main website
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if (license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (license === "Boost"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  };
  if (license === "BSD"){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  };
  if (license === "Eclipse"){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  };
  if (license === "GNU GPL v3"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };
  if (license === "GNU AGPL v3"){
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  };
  if (license === "Mozilla"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  };
  if (license === "Open Database License (ODbL)'"){
    return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`
  };
  if (license === ""){
    return ``;
  };
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    // returns a link to the license main website
    return `https://opensource.org/licenses/MIT`
  };
  if (license === "Apache"){
    return `https://opensource.org/licenses/Apache-2.0`
  };
  if (license === "Boost"){
    return `https://www.boost.org/LICENSE_1_0.txt`
  };
  if (license === "BSD"){
    return `https://opensource.org/licenses/BSD-3-Clause`
  };
  if (license === "Eclipse"){
    return `https://opensource.org/licenses/EPL-2.0`
  };
  if (license === "GNU GPL v3"){
    return `https://www.gnu.org/licenses/gpl-3.0`
  };
  if (license === "GNU AGPL v3"){
    return `https://www.gnu.org/licenses/agpl-3.0`
  };
  if (license === "Mozilla"){
    return `https://opensource.org/licenses/MPL-2.0`
  };
  if (license === "Open Database License (ODbL)'"){
    return `https://opendatacommons.org/licenses/odbl/`
  };
  if (license === ""){
    return ``;
  };
}
// function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === "MIT"){
    // returns main license statement
    return `

Copyright [2021] 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Find more information at ${renderLicenseLink(license)}.`


  };
  if (license === "Apache"){
    return `

Copyright [2021] 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

Find more information at ${renderLicenseLink(license)}.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
  };
  if (license === "Boost"){
    return `

Boost Software License - Version 1.0 - August 17th, 2003

Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so, all subject to the following:

The copyright notices in the Software and this entire statement, including
the above license grant, this restriction and the following disclaimer,
must be included in all copies of the Software, in whole or in part, and
all derivative works of the Software, unless such copies or derivative
works are solely in the form of machine-executable object code generated by
a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

Find more information at ${renderLicenseLink(license)}.`

  };
  if (license === "BSD"){
    return `

Copyright [2021] 

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Find more information at ${renderLicenseLink(license)}.`

  };
  if (license === "Eclipse"){
    return `

This Source Code Form is subject to the terms of the Eclipse Public License version 2.0 If a copy of the MPL was not distributed with this file, You can obtain one at ${renderLicenseLink(license)}`
  };
  if (license === "GNU GPL v3"){
    return `
 
Copyright (C) [2021] 

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see ${renderLicenseLink(license)}.`

  };
  if (license === "GNU AGPL v3"){
    return `

Copyright (C) [2021]

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see ${renderLicenseLink(license)}`
  };
  if (license === "Mozilla"){
    return `

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at ${renderLicenseLink(license)}`
  };
  if (license === "Open Database License (ODbL)'"){
    return `

This Source Code Form is subject to the terms of the Open Database License (ODbL) v1.0. If a copy of the MPL was not distributed with this file, You can obtain one at ${renderLicenseLink(license)}`
  };
  if (license === ""){
    return ``;
  };
}

// exporting the module to be able to use these functions in main index.js file
module.exports = {
  renderLicenseBadge, renderLicenseLink, renderLicenseSection
};