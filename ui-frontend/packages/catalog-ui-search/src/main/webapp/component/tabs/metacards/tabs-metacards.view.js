/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details. A copy of the GNU Lesser General Public License
 * is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/

const _ = require('underscore')
const TabsView = require('../tabs.view')
const MetacardsTabsModel = require('./tabs-metacards')
const user = require('../../singletons/user-instance')

function getTypes(results) {
  const types = {}
  results.forEach(result => {
    if (result.isResource()) {
      types.resource = true
    } else if (result.isRevision()) {
      types.revision = true
    } else if (result.isDeleted()) {
      types.deleted = true
    }
    if (result.isRemote()) {
      types.remote = true
    }
  })
  return Object.keys(types)
}

const MetacardsTabsView = TabsView.extend({
  className: 'is-metacards',
  setDefaultModel() {
    this.model = new MetacardsTabsModel()
  },
  initialize(options) {
    this.selectionInterface = options.selectionInterface
    if (options.model === undefined) {
      this.setDefaultModel()
    }
    this.determineAvailableContent()
    TabsView.prototype.initialize.call(this)
    const debounceDetermineContent = _.debounce(this.handleMetacardChange, 200)

    this.listenTo(
      this.selectionInterface.getSelectedResults(),
      'add remove reset refreshdata update',
      debounceDetermineContent
    )
  },
  handleMetacardChange() {
    this.determineAvailableContent()
    this.determineContent()
  },
  determineContentFromType() {
    const activeTabName = this.model.get('activeTab')
    const types = getTypes(this.selectionInterface.getSelectedResults())
    if (
      types.indexOf('revision') >= 0 &&
      ['Archive'].indexOf(activeTabName) >= 0
    ) {
      this.model.set('activeTab', 'Details')
    } else if (
      types.indexOf('deleted') >= 0 &&
      types.length > 1 &&
      ['Archive'].indexOf(activeTabName) >= 0
    ) {
      this.model.set('activeTab', 'Details')
    }
    if (
      types.indexOf('remote') >= 0 &&
      ['Archive'].indexOf(activeTabName) >= 0
    ) {
      this.model.set('activeTab', 'Details')
    }
    if (
      !user.canWrite(this.selectionInterface.getSelectedResults()) &&
      ['Archive'].indexOf(activeTabName) >= 0
    ) {
      this.model.set('activeTab', 'Details')
    }
    const activeTab = this.model.getActiveView()
    this.tabsContent.show(
      new activeTab({
        selectionInterface: this.selectionInterface,
      })
    )
    this._clickHandler()
  },
  determineContent() {
    if (this.selectionInterface.getSelectedResults().length > 1) {
      setTimeout(() => this.determineContentFromType(), 0)
    }
  },
  determineAvailableContent() {
    if (this.selectionInterface.getSelectedResults().length > 1) {
      const types = getTypes(this.selectionInterface.getSelectedResults())
      this.$el.toggleClass('is-mixed', types.length > 1)
      this.$el.toggleClass('is-resource', types.indexOf('resource') >= 0)
      this.$el.toggleClass('is-revision', types.indexOf('revision') >= 0)
      this.$el.toggleClass('is-deleted', types.indexOf('deleted') >= 0)
      this.$el.toggleClass('is-remote', types.indexOf('remote') >= 0)
      this.$el.toggleClass(
        'is-editing-disabled',
        !user.canWrite(this.selectionInterface.getSelectedResults())
      )
    }
  },
})

module.exports = MetacardsTabsView
