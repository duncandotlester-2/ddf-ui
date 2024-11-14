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
import { AttributeTypes } from '../../../js/model/Startup/startup.types';
import React from 'react';
type ComparatorType = {
    value: string;
    label: string;
};
export declare const dateComparators: ComparatorType[];
export declare const geometryComparators: ComparatorType[];
export declare const stringComparators: ComparatorType[];
export declare const numberComparators: {
    value: string;
    label: string;
}[];
export declare const booleanComparators: ComparatorType[];
export declare const TypeToComparators: {
    [key in AttributeTypes]: ComparatorType[];
};
export declare const getComparators: (attribute: string) => ComparatorType[];
export declare const ComparatorContext: React.Context<{
    getComparators: (attribute: string) => ComparatorType[];
}>;
export declare function DefaultComparatorProvider({ children, }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function useComparators(): {
    getComparators: (attribute: string) => ComparatorType[];
};
export declare function useGetComparators(): (attribute: string) => ComparatorType[];
export declare function useComparatorsForAttribute(attribute: string): ComparatorType[];
export {};
